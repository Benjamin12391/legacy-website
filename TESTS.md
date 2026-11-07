# Manuelles Testprotokoll

**Testumgebung:** Im Browser über einen lokalen Webserver öffnen. Datum, Browser, Viewport, URL sowie die geforderten Screenshots nach der Durchführung in der Spalte „Evidenz“ ergänzen. Status ist vor der manuellen Durchführung **BLOCKED** und darf erst danach auf PASS oder FAIL gesetzt werden.

| Test-ID | Requirement | Kategorie | Vorbedingung / Testdaten | Testschritte | Erwartetes Ergebnis | Tatsächliches Ergebnis | Status | Evidenz |
|---|---|---|---|---|---|---|---|---|
| T-01 | GEN-04/05/06 | Happy Path | `index.html` geöffnet; Code `AT` | Button wählen; Network öffnen; Ausgabe prüfen. | Erfolgreicher HTTP-Request; JSON wird verarbeitet; dynamische Karte mit Österreich erscheint. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot, URL, Network-Request, Browser/Viewport/Datum ergänzen. |
| T-02 | GEN-03/06 | Interaktion | Formular sichtbar; Code `DEU` | Wert auf `DEU` ändern; Button wählen; DOM beobachten. | Neue Karte zeigt Deutschland und die Eingabe beeinflusst die Darstellung. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot, Browser/Viewport/Datum ergänzen. |
| T-03 | GEN-01 | Navigation | Startseite geöffnet | Link „Über das Projekt“ wählen, danach „Ländersuche“. | `ueber.html` bzw. `index.html` wird geladen; Navigation bleibt nutzbar. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot, URL, Browser/Viewport/Datum ergänzen. |
| T-04 | GEN-07 | Negativtest | Formular sichtbar; Ländercode leer | Hauptfeld leeren; Button wählen; Network prüfen. | Meldung für ungültige Eingabe; kein API-Request. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot und Network, Browser/Viewport/Datum ergänzen. |
| T-05 | GEN-07 | Grenzfall | Formular sichtbar; Code `A1!` oder `ABCD` | Grenzwert eingeben; Button wählen. | Verständliche Fehlermeldung; Seite und Button bleiben bedienbar. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot und Console, Browser/Viewport/Datum ergänzen. |
| T-06 | GEN-01/07 | Bewusster Defekt | `index.html` erreichbar; Test-URL `ueber-absichtlich-fehlt.html` | Test-URL direkt aufrufen. | Die Seite existiert nicht (404/Dateifehler); Abweichung wird als FAIL erkannt und dokumentiert. | Absichtlich nicht vorhandene Testseite; manuell zu bestätigen. | FAIL (bewusst) | Screenshot + URL + Browser/Viewport/Datum ergänzen. |
| T-07 | GEN-04/07 | Technik / Recovery | DevTools geöffnet; Offline-Modus aktivieren | Offline aktivieren; gültigen Code absenden; Network/Console prüfen. | Fehler wird abgefangen und als verständliche Meldung angezeigt; Button wird wieder aktiv. | Noch nicht manuell ausgeführt. | BLOCKED | Network, Console, Screenshot, Browser/Viewport/Datum ergänzen. |
| T-08 | GEN-01/03 | Bedienbarkeit | `index.html` geöffnet | Mit Tab zum Eingabefeld und Button navigieren; mit Enter absenden; Viewport auf 320 px verkleinern. | Kernaktion ist per Tastatur erreichbar und auf kleinem Viewport verständlich. | Noch nicht manuell ausgeführt. | BLOCKED | Screenshot, Browser/Viewport/Datum ergänzen. |

## Auswertungshinweis

T-06 ist absichtlich als FAIL dokumentiert: Die URL verweist bewusst auf keine Datei. Dieser reproduzierbare Defekt ist kein unerkannter Fehler der Kernfunktion.
