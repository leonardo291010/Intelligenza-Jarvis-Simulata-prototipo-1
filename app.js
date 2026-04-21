if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker attivo"))
    .catch(err => console.log("Errore SW:", err));
}

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
  startScanner()
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
function startScanner() {
  const container = document.querySelector(".preview").parentElement;

  const line = document.createElement("div");
  line.classList.add("scanner-line");

  container.appendChild(line);

  setTimeout(() => {
    line.remove();
  }, 2000);
}
