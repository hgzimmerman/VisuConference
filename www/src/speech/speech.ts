



// function populateVocieList() {
//   let voices = synth.getVoices();
//
//   for(let i = 0; i < voices.length ; i++) {
//     var option = document.createElement("option");
//     option.textContent = voices[i].name + " (" + voices[i].lang + ")";
//
//     if(voices[i].default) {
//       option.textContent += " -- DEFAULT";
//     }
//
//     option.setAttribute("data-lang", voices[i].lang);
//     option.setAttribute("data-name", voices[i].name);
//     voiceSelect.appendChild(option);
//   }



export function talk(words: string ) {

  console.log(`talking: ${words}`);
  let synth = window.speechSynthesis;
  let utterThis = new SpeechSynthesisUtterance(words);
  let voices = synth.getVoices();
  utterThis.voice = voices[0];
  synth.speak(utterThis);
}
