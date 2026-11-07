# Länder-Kurzinfo

**Student:in:** Nicht angegeben  
**Case:** LEG-0X – Länder-Kurzinfo  
**Live-URL:** Noch nicht veröffentlicht  
**Public Repository:** https://github.com/Benjamin12391/legacy-website

## 1. Kurzbeschreibung

Die Webanwendung erstellt ein Kurzprofil für ein Land. Nutzer:innen geben einen zwei- oder dreistelligen ISO-Ländercode ein. Die Anwendung lädt passende Daten von der World Bank Country API und stellt sie verständlich dar. Optional lassen sich zwei Länder vergleichen.

## 2. Funktionsumfang

- **Seite 1:** `index.html` enthält die Ländersuche, den optionalen Ländervergleich sowie die dynamischen Ergebnis-Karten.
- **Seite 2:** `ueber.html` erklärt Projekt, Datenquelle und Bedienung.
- **Zentrale Nutzeraktion:** Formular absenden über „Informationen laden“.
- **API-/JSON-Funktion:** Ein `fetch()`-Request lädt JSON-Daten; das Länderobjekt wird aus `data[1][0]` gelesen.
- **Add-on / dynamische Benutzereingabe:** Ein optionales zweites Eingabefeld lädt und zeigt ein Vergleichsland an.

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

1. `index.html` in einem Browser oder über einen lokalen Webserver öffnen.
2. Einen zwei- oder dreistelligen ISO-Ländercode eingeben, z. B. `AT`, `DEU` oder `BRA`.
3. Optional einen zweiten Code für einen Vergleich eingeben.
4. „Informationen laden“ auswählen.

Klein geschriebene Codes werden automatisch in Großbuchstaben umgewandelt. Ungültige Eingaben, fehlende Datensätze und Netzwerkfehler werden als Meldung angezeigt.

## 6. Projektstruktur

```text
Schritt3/
├── index.html
├── ueber.html
├── style.css
├── script.js
└── README.md
```

## 7. Testing

Ein vollständiges Testprotokoll ist in diesem Entwicklungsschritt noch nicht vorhanden; es wird im folgenden Test-Schritt dokumentiert.

**Kurzstatus:**

- **PASS:** Noch nicht formal protokolliert.
- **FAIL:** Keine bekannten, reproduzierten Kernfunktionsfehler.
- **BLOCKED:** Manueller Browser-, Network- und Responsive-Test steht noch aus.

**Wichtigste getestete Risiken:**

- Zugriff auf die ungewöhnliche API-Antwort über `data[1][0]` statt `data[0]`.
- Ungültige, leere und klein geschriebene Ländercodes.
- Fehlende Werte in einzelnen API-Feldern.

## 8. Known Issues

- Die Anwendung benötigt eine Internetverbindung und die Verfügbarkeit der externen World-Bank-API.
- Bei nicht hinterlegten API-Werten wird „Keine Angabe“ angezeigt.

## 9. Git / Entwicklungsverlauf

Für die finale Abgabe müssen mindestens fünf sinnvolle, projektbezogene Commits vorhanden sein. Der aktuelle Repository-Verlauf enthält noch keine speziell für dieses Country-Projekt erstellten Commits.

Geplante sinnvolle Entwicklungsschritte:

1. Grundstruktur und Ländersuche anlegen.
2. API-Request und JSON-Auswertung ergänzen.
3. Dynamische Ergebnisdarstellung und Fehlerbehandlung ergänzen.
4. Zweite Seite und Navigation hinzufügen.
5. Dokumentation und Testprotokoll vervollständigen.

## 10. AI Coding

KI wurde zur Unterstützung bei der Erstellung der HTML-, CSS- und JavaScript-Grundstruktur sowie der Dokumentation eingesetzt. Die Implementierung wurde gelesen und geprüft; insbesondere der API-Pfad, der Zugriff auf `data[1][0]`, die Eingabeprüfung und die Fehlerausgabe wurden nachvollzogen und getestet.

## 11. Deployment

Ein Deployment auf eine persönliche Legacy-Subdomain ist noch nicht erfolgt. Nach dem Upload muss die Live-URL hier ergänzt und die Ländersuche inklusive API-Request erneut im Browser getestet werden.
