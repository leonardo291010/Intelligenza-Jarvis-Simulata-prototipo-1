export function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "it-IT";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  speechSynthesis.speak(speech);
}
