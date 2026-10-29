# 🧮 Mathe-Abenteuer

Ein Lernspiel für Primarschulkinder, das Kopfrechnen spielerisch trainiert. Die Aufgaben werden automatisch schwieriger, je besser das Kind spielt.

**👉 [Jetzt spielen](https://dorsa-pou.github.io/Mathi-spiel/)**

## Funktionen

- **Vier Rechenarten:** Addition, Subtraktion, Multiplikation und Division
- **Adaptive Schwierigkeit:** Die Zahlen werden mit jeder richtigen Antwort grösser
- **Altersgerechte Grenzen:** Plus und Minus bis 100, Mal und Geteilt bis 10 × 10
- **Level-System** mit Fortschrittsbalken (alle 5 richtigen Antworten ein Level höher)
- **Sofortiges Feedback** mit Farben und Animation bei falschen Antworten
- **Responsive Design:** funktioniert auf Computer, Tablet und Handy

## Technologien

- **HTML5** – semantische Struktur der Seite
- **CSS3** – Flexbox, Farbverläufe, Übergänge und Keyframe-Animationen
- **JavaScript** – Spiellogik, DOM-Manipulation und Event-Handling
- **Git & GitHub** – Versionskontrolle
- **GitHub Pages** – Deployment

## Herausforderungen und Lösungen

**Division ohne Kommazahlen**
Teilt man zwei zufällige Zahlen, entstehen meist Kommazahlen (z. B. 7 ÷ 3 = 2,33…), die für Kinder ungeeignet sind. Lösung: Das Programm erzeugt zuerst eine Multiplikation (3 × 4 = 12) und stellt sie umgekehrt als Division dar (12 ÷ 3). So geht jede Aufgabe ohne Rest auf.

**Subtraktion ohne negative Ergebnisse**
Bei zufälligen Zahlen entstehen schnell negative Ergebnisse (3 − 8 = −5). Lösung: Die Aufgabe wird aus einer Addition abgeleitet (3 + 8 = 11 → 11 − 3), sodass das Ergebnis immer positiv ist.

**Steigende Schwierigkeit mit festen Grenzen**
Die Schwierigkeit wächst mit den Punkten, darf aber das Niveau der Primarschule nicht überschreiten. Lösung: Mit `Math.min()` wird die Obergrenze begrenzt, z. B. damit die Summe nie über 100 liegt.

## Was ich gelernt habe

- Wie HTML, CSS und JavaScript zusammenarbeiten
- Ein Problem zuerst durchdenken, bevor man programmiert
- Fehler mit der Browser-Konsole finden (Debugging)
- Ein Projekt mit Git versionieren und mit GitHub Pages veröffentlichen

## Lokal starten

1. Repository herunterladen (grüner Knopf „Code“ → „Download ZIP“)
2. Die Datei `index.html` im Browser öffnen

## Über mich

**Dorsa Pourmoghaddam** – Studentin BSc Artificial Intelligence & Machine Learning an der Hochschule Luzern