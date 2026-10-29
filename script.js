// 1. Variablen
let punkte = 0;
let richtigeLoesung = 0;

// 2. Elemente von der Seite holen
const aufgabeText = document.getElementById("aufgabe");
const antwortFeld = document.getElementById("antwort");
const pruefenKnopf = document.getElementById("pruefen");
const rueckmeldung = document.getElementById("rueckmeldung");
const punkteAnzeige = document.getElementById("punkte");
const levelAnzeige = document.getElementById("level");
const balken = document.getElementById("balken");

// 3. Zufallszahl von 1 bis max
function zufallszahl(max) {
  return Math.floor(Math.random() * max) + 1;
}

// 4. Neue Aufgabe: Plus, Minus, Mal oder Geteilt
function neueAufgabe() {
  const rechenart = zufallszahl(4);
  const maxZahl = Math.min(99, 5 + punkte * 2);
  const maxFaktor = Math.min(10, 3 + punkte);

  if (rechenart === 1) {
    // Plus
    const a = zufallszahl(maxZahl);
    const b = zufallszahl(Math.min(maxZahl, 100 - a));
    richtigeLoesung = a + b;
    aufgabeText.textContent = a + " + " + b + " = ?";
  } else if (rechenart === 2) {
    // Minus: rückwärts aus einer Plus-Aufgabe
    const a = zufallszahl(maxZahl);
    const b = zufallszahl(maxZahl);
    const summe = a + b;
    richtigeLoesung = b;
    aufgabeText.textContent = summe + " − " + a + " = ?";
  } else if (rechenart === 3) {
    // Mal: höchstens 10 × 10
    const a = zufallszahl(maxFaktor);
    const b = zufallszahl(maxFaktor);
    richtigeLoesung = a * b;
    aufgabeText.textContent = a + " × " + b + " = ?";
  } else {
    // Geteilt: rückwärts aus einer Mal-Aufgabe
    const a = zufallszahl(maxFaktor);
    const b = zufallszahl(maxFaktor);
    const produkt = a * b;
    richtigeLoesung = b;
    aufgabeText.textContent = produkt + " ÷ " + a + " = ?";
  }

  antwortFeld.value = "";
  antwortFeld.focus();
}

// 5. Level, Punkte und Balken aktualisieren
function anzeigeAktualisieren() {
  const level = Math.floor(punkte / 5) + 1;
  const fortschritt = (punkte % 5) / 5 * 100;
  punkteAnzeige.textContent = punkte;
  levelAnzeige.textContent = level;
  balken.style.width = fortschritt + "%";
}

// 6. Antwort prüfen
function pruefen() {
  if (antwortFeld.value === "") {
    rueckmeldung.textContent = "Bitte gib eine Zahl ein.";
    rueckmeldung.className = "rueckmeldung falsch";
    return;
  }

  const eingabe = Number(antwortFeld.value);

  if (eingabe === richtigeLoesung) {
    punkte = punkte + 1;
    anzeigeAktualisieren();
    rueckmeldung.className = "rueckmeldung richtig";
    if (punkte % 5 === 0) {
      rueckmeldung.textContent = "Level geschafft! 🚀";
    } else {
      rueckmeldung.textContent = "Richtig! 🎉";
    }
    neueAufgabe();
  } else {
    rueckmeldung.textContent = "Leider falsch. Versuch es nochmal!";
    rueckmeldung.className = "rueckmeldung falsch";
    antwortFeld.classList.add("wackeln");
    setTimeout(function () {
      antwortFeld.classList.remove("wackeln");
    }, 400);
  }
}

// 7. Auf Klick und Enter reagieren
pruefenKnopf.addEventListener("click", pruefen);
antwortFeld.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pruefen();
  }
});

// 8. Spiel starten
neueAufgabe();