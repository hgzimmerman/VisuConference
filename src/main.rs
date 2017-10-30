#![feature(plugin)]
#![plugin(rocket_codegen)]
#![feature(const_atomic_bool_new)]
#![feature(custom_derive)]

extern crate markov;
extern crate regex;
extern crate rocket;
extern crate rocket_codegen;
#[macro_use]
extern crate rocket_contrib;
#[macro_use]
extern crate serde_derive;
//extern crate serde;
extern crate serde_json;
extern crate time;

#[macro_use]
extern crate log;
extern crate simplelog;

//extern crate rocket_cors;

//use rocket_cors::{AllowedOrigins, AllowedHeaders};

use regex::Regex;
use markov::ArcChain;
use std::io::BufReader;
use std::io::prelude::*;
use std::fs::OpenOptions;
use rocket_contrib::{Json, Value};
use std::sync::Mutex;
use rocket::State;
use rocket::http::Method;
use rocket::response::NamedFile;
use std::path::{Path, PathBuf};
use simplelog::{Config, TermLogger, WriteLogger, CombinedLogger, LogLevelFilter};
use std::fs::File;
use std::collections::HashMap;


#[derive(FromForm)]
struct TextRequest {
    sentences: usize,
    text: String
}


#[get("/trump?<text_request>")]
fn text_trump(text_request: TextRequest, chain: State<Mutex<ArcChain<String>>>, map: State<Mutex<HashMap<String,String>>>) -> Json<GetTextResponse> {


    let text: String;
    let user: usize;
    if let Some(response) = map.lock().unwrap().get(text_request.text.to_lowercase().as_str()) {
        text = response.clone();
        user = 2;
    } else {
        let locked_chain: &ArcChain<String> = &chain.lock().unwrap();
        text = generate_text(text_request.sentences, locked_chain);
        user = 1
    }
    Json(GetTextResponse {
        text: text,
        user: user
    })
}

/// Need to run `npm run build` to update the files for distribution.
#[get("/<file..>", rank=4)]
fn build_files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("www/build/").join(file)).ok()
}

#[get("/", rank=2)]
fn index() -> Option<NamedFile> {
    NamedFile::open(Path::new("www/build/index.html")).ok()
}


#[derive(Serialize)]
struct GetTextResponse { text: String, user: usize }


fn generate_text(sentences: usize, chain: &ArcChain<String>) -> String {
    chain.iter_for(sentences)
        .map(|line| line.iter().fold(String::new(), |r, c | r + c.as_str() + " ") ) // Fold the vectors of words into a sentence
        .fold(String::new(), |r , c| r + c.as_str() + " ") // Fold the sentences into a paragraph
}


fn create_chain() -> Result<ArcChain<String>, String> {
    let file_name = "chain_sources/trump.txt";

    match OpenOptions::new().read(true).open(&file_name) {
        Ok(file) => {
            let mut file_contents: String = String::new();
            let mut buf_reader = BufReader::new(&file);
            buf_reader.read_to_string(&mut file_contents).unwrap();

            file_contents.replace("...", ".");

            let regex : Regex = Regex::new(r"[\r\n]").unwrap();
            let file_contents = regex.replace_all(file_contents.as_str(), ""); // remove newlines

            let mut chain = ArcChain::new();
            for line in file_contents.split(".") {
                let line = line.trim().to_owned() + ".";
                chain.feed_str(line.as_str());
            }
            return Ok(chain)
        },
        Err(e) => return Err(format!("Couldn't read the file: {}", e)),
    }
}

fn create_map() -> HashMap<String, String> {
    let mut hash_map: HashMap<String, String> = HashMap::new();
    // Put all statements and requests for user 2 here.
    // All keys should be lowercase.
    hash_map.insert(String::from("hello"), String::from("Hello fellow teammate."));


    hash_map
}

fn main() {

//    let (allowed_origins, failed_origins) = AllowedOrigins::some(&["http://localhost:3000", "http://localhost:8000"]);
//    assert!(failed_origins.is_empty());
//
//    let options = rocket_cors::Cors {
//        allowed_origins: allowed_origins,
//        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(),
//        allowed_headers: AllowedHeaders::some(&["Authorization", "Accept"]),
//        allow_credentials: true,
//        ..Default::default()
//    };


    const LOGFILE_NAME: &'static str = "visuconference.log";
    CombinedLogger::init(
        vec![
            TermLogger::new(LogLevelFilter::Info, Config::default()).unwrap(),
            WriteLogger::new(LogLevelFilter::Trace, Config::default(), File::create(LOGFILE_NAME).unwrap()),
        ]
    ).unwrap();

    let trump_chain = create_chain().unwrap();
    let mutexed_trump_chain = Mutex::new(trump_chain);

    let normal_user_map: HashMap<String, String> = create_map();
    let mutexed_user_map: Mutex<HashMap<String, String >> = Mutex::new(normal_user_map);

    rocket::ignite()
        .manage(mutexed_trump_chain)
        .manage(mutexed_user_map)
        .mount("/", routes![text_trump, build_files, index])
//        .attach(options)
        .launch();
}