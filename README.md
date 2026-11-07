# Länder-Kurzinfo

**Student:in:** Nicht angegeben  
**Case:** LEG-0X – Länder-Kurzinfo  
**Live-URL:** Noch nicht veröffentlicht  
**Public Repository:** https://github.com/Benjamin12391/legacy-website

## 1. Kurzbeschreibung

Die Webanwendung erstellt ein Kurzprofil für ein Land. Ein ISO-Ländercode wird an die World Bank Country API übergeben. Die Antwort wird verarbeitet und als Profil mit Region, Einkommensgruppe, Hauptstadt und Koordinaten dargestellt. Optional können zwei Länder verglichen werden.

## 2. Funktionsumfang

- **Seite 1:** `index.html` bietet die Ländersuche, den Vergleich und dynamisch erzeugte Ergebnis-Karten.
- **Seite 2:** `ueber.html` enthält Informationen zu Projekt, API und Bedienung.
- **Zentrale Nutzeraktion:** Formular mit „Informationen laden“ absenden.
- **API-/JSON-Funktion:** `fetch()` ruft die API auf; das Länderobjekt wird aus `data[1][0]` verarbeitet.
- **Add-on / dynamische Benutzereingabe:** Ein optionales Vergleichsfeld lädt ein zweites Land und erzeugt eine zweite Karte.

## 3. Verwendete Technologien

- HTML
- CSS
- JavaScript (Vanilla JS)
- Browser Fetch API
- World Bank Country API

## 4. API

**API:** World Bank Country API  
**Dokumentation:** https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries

**Endpoint:**

```text
https://api.worldbank.org/v2/country/{ISO-Code}?format=json
```

Beispiel:

```text
https://api.worldbank.org/v2/country/AT?format=json
```

**Verwendete JSON-Felder:**

- `data[1][0].name`
- `data[1][0].region.value`
- `data[1][0].incomeLevel.value`
- `data[1][0].capitalCity`
- `data[1][0].latitude`
- `data[1][0].longitude`

## 5. Bedienung

1. `index.html` im Browser oder über einen lokalen Webserver öffnen.
2. Einen zwei- oder dreistelligen ISO-Code eingeben, z. B. `AT`, `DEU` oder `BRA`.
3. Optional einen zweiten Code im Feld „Vergleichsland“ eintragen.
4. „Informationen laden“ auswählen.

Codes werden in Großbuchstaben normalisiert. Ungültige Eingaben, fehlende Daten und technische Fehler werden über eine Statusmeldung angezeigt.

## 6. Projektstruktur

```text
Schritt4/
├── index.html
├── ueber.html
├── style.css
├── script.js
├── TESTS.md
└── README.md
```

## 7. Testing

Das vollständige Testprotokoll liegt unter [TESTS.md](TESTS.md).

**Kurzstatus:**

- **PASS:** Noch nicht manuell im Browser durchgeführt und daher nicht bestätigt.
- **FAIL:** T-06 ist ein bewusst konstruierter, dokumentierter Defekt (nicht vorhandene Test-URL).
- **BLOCKED:** T-01 bis T-05 sowie T-07 und T-08 benötigen die manuelle Durchführung inklusive Evidenz.

**Wichtigste getestete Risiken:**

- API-Request, JSON-Verarbeitung und korrekter Zugriff auf `data[1][0]`.
- Leere, ungültige und alternative Ländercodes.
- Navigation, Offline-/API-Fehler und Bedienbarkeit per Tastatur bzw. bei kleinem Viewport.

## 8. Known Issues

- T-06 dokumentiert bewusst eine nicht vorhandene Test-URL als reproduzierbaren FAIL.
- Die Anwendung ist von der Erreichbarkeit, möglichen Rate-Limits und der Datenqualität der externen World-Bank-API abhängig.
- Fehlende Einzelwerte der API werden mit „Keine Angabe“ dargestellt.

## 9. Git / Entwicklungsverlauf

Für die finale Abgabe müssen mindestens fünf sinnvolle, projektbezogene Commits vorhanden sein. Der aktuelle Repository-Verlauf enthält noch keine speziell für dieses Country-Projekt erstellten Commits.

Geplante sinnvolle Entwicklungsschritte:

1. Grundstruktur und Ländersuche anlegen.
2. API-Request und JSON-Auswertung ergänzen.
3. Dynamische Ergebnisdarstellung und Fehlerbehandlung ergänzen.
4. Zweite Seite und Navigation hinzufügen.
5. Testprotokoll und finale Dokumentation ergänzen.

## 10. AI Coding

KI wurde zur Unterstützung bei der Erstellung der HTML-, CSS- und JavaScript-Grundstruktur sowie der Testdokumentation eingesetzt. Die Implementierung wurde geprüft und nachvollzogen; insbesondere API-Pfad, `data[1][0]`, Eingabeprüfung, DOM-Erzeugung und Fehleranzeige sind verständlich dokumentiert. Die Testfälle in `TESTS.md` müssen im Browser manuell ausgeführt und mit Evidenz ergänzt werden.

## 11. Deployment

Die finale Version wurde noch nicht auf eine persönliche Legacy-Subdomain hochgeladen. Nach dem Deployment muss die Live-URL ergänzt werden. Anschließend sind mindestens die Kernsuche, Navigation und eine Fehlerbehandlung erneut auf der Live-URL zu testen und im Testprotokoll zu vermerken.
