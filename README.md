# VisuConference
Prototype for an accessibility related project for RIT's SWEN 444.

# Concept Statement

VisuConference is a system that will listen to conversations in a group and use speech-to-text algorithms to convert the voices to text.
The text will be assigned to individual users via a machine learning algorithm that recognizes voices.
These snippets of text will be presented to the users in a chat-like interface and will offer the ability to edit the “messages”.
Nonvocal users have the option to enter text manually, and play such text through text-to-speech functionality, if desired.
The system will allow Deaf and hard of hearing people to feel connected and involved with the people around them.
It will help prevent the feeling of being left out that typically accompanies being Deaf in a group of hearing individuals.
It will also impact hearing people by making them feel less uncomfortable working with Deaf individuals, thus increasing inclusiveness in the workplace.

# Demo Implementation

We will be staying away from any speech recognition, instead opting to generate random text and sending it to the webapp at a fixed interval.
~~If we find it feesable, when a laptop's microphone detects a loud enough noise, it may send a request to the backend for random text, although the fixed interval text-sending is easier to implement.~~
We instead opted to send a response message when the user sends a message instead of detecting voice or sending at intervals.


# Install, Build, and Run Instructions
VisuConference is known to work on Unix-based systems, although technically nothing should prevent you from running it on Windows.
To install, navigate to the directory you want to install this, and run `git clone <THIS_REPO_ADDRESS>`.

To build the application for running locally, follow the following directions:
* Install Node + Npm, as well as [Rust Nightly](https://www.rust-lang.org/en-US/install.html) newer than mid-October (the `cargo` build tool will be included when Rust is installed).
* Navigate to the `www/` directory edit the `.env.production` file.
* Comment out the address to `visuconference.mooo.com` and uncomment `localhost`. Close the file
* From the `www/` directory, run `npm run build`. This will build the frontend and store the result in `www/build/`.
* Navigate back up to the root directory of the project, and execute `cargo run --release`. This will build the backend server and run it.
* Go to a web browser and navigate to `localhost:8000/`. You are now running the VisuConference App.


If you don't want to install this locally, an example is running at http://visuconference.mooo.com:8000/.

