#![feature(plugin)]
#![plugin(rocket_codegen)]

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

use regex::Regex;
use markov::ArcChain;
use std::io::BufReader;
use std::io::prelude::*;
use std::fs::OpenOptions;
use rocket_contrib::{Json, Value};
use std::sync::Mutex;
use rocket::State;



#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}


#[get("/text/<sentences>")]
fn text_trump(sentences: usize, chain: State<Mutex<ArcChain<String>>>) -> Json<GetTextResponse> {
    let locked_chain: &ArcChain<String> = &chain.lock().unwrap();
    let text = generate_text(sentences, locked_chain);
    Json(GetTextResponse {
        message: text,
        user: 2
    })
}


#[derive(Serialize)]
struct GetTextResponse { message: String, user: usize }


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

fn main() {


    let trump_chain = create_chain().unwrap();
    let mutexed_trump_chain = Mutex::new(trump_chain);

    rocket::ignite()
        .manage(mutexed_trump_chain)
        .mount("/", routes![text_trump])
        .launch();
}