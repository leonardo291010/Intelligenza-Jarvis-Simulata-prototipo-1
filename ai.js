export function analyzeImage(mode) {
  if (mode === "bar") {
    return "Sembra un bar. Potresti trovare caffè, snack e un ambiente sociale.";
  }

  if (mode === "school") {
    return "Ambiente scolastico rilevato. Modalità studio attivata.";
  }

  if (mode === "object") {
    return "Oggetto rilevato. Analisi in corso...";
  }

  return "Analisi automatica completata.";
}
