/* PREVIEW IMMAGINE */
const camera = document.getElementById("camera");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

camera.addEventListener("change", function () {
  const file = camera.files[0];

  if (!file) return;

  const url = URL.createObjectURL(file);
  preview.src = url;
});

/* VOCE (TEXT TO SPEECH) */
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "it-IT";
  speech.rate = 1;
  speech.pitch = 1;
  speechSynthesis.speak(speech);
}

/* LOGICA ANALISI (PER ORA BASE) */
function analyze() {
  const mode = document.getElementById("mode").value;

  let response = "";

  if (mode === "bar") {
    response = "Sembra un bar. Potresti trovare caffè, snack e un ambiente sociale.";
  } 
  else if (mode === "school") {
    response = "Ambiente scolastico rilevato. Modalità studio attivata.";
  } 
  else if (mode === "object") {
    response = "Oggetto rilevato. Sto analizzando le caratteristiche visive.";
  } 
  else {
    response = "Analisi automatica in corso... attendi risultati.";
  }

  result.innerText = response;

  speak(response);
}
