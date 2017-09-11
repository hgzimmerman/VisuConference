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
If we find it feesable, when a laptop's microphone detects a loud enough noise, it may send a request to the backend for random text, although the fixed interval text-sending is easier to implement.
We do intend to integrate some text-to-speech system for user-generated messages entered in the app.
We do intend to implement message editing.
