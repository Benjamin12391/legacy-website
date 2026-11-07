const form = document.getElementById("country-form");
const countryCodeInput = document.getElementById("country-code");
const compareCodeInput = document.getElementById("compare-code");
const results = document.getElementById("results");
const statusMessage = document.getElementById("status");
const submitButton = form.querySelector("button");

function normalizeCode(value) {
  const code = value.trim().toUpperCase();
  return /^[A-Z]{2,3}$/.test(code) ? code : null;
}

function showStatus(message = "", isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#b42318" : "";
}

function valueOrFallback(value) {
  return value && value.trim() ? value : "Keine Angabe";
}

function createCountryCard(country) {
  const card = document.createElement("article");
  const title = document.createElement("h2");
  title.textContent = valueOrFallback(country.name);
  card.append(title);

  const details = [
    ["Region", country.region?.value],
    ["Einkommensgruppe", country.incomeLevel?.value],
    ["Hauptstadt", country.capitalCity],
    ["Breitengrad", country.latitude],
    ["Längengrad", country.longitude],
  ];
  const list = document.createElement("dl");
  for (const [label, value] of details) {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = valueOrFallback(value);
    list.append(term, description);
  }
  card.append(list);
  return card;
}

async function fetchCountry(code) {
  const url = `https://api.worldbank.org/v2/country/${encodeURIComponent(code)}?format=json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Die API ist derzeit nicht erreichbar.");
  const data = await response.json();
  const country = data?.[1]?.[0];
  if (!country) throw new Error(`Für den Ländercode „${code}“ wurden keine Daten gefunden.`);
  return country;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  results.replaceChildren();
  const mainCode = normalizeCode(countryCodeInput.value);
  const compareValue = compareCodeInput.value.trim();
  const compareCode = compareValue ? normalizeCode(compareValue) : null;

  if (!mainCode || (compareValue && !compareCode)) {
    showStatus("Bitte gib zwei- oder dreistellige Buchstabencodes ein.", true);
    return;
  }

  countryCodeInput.value = mainCode;
  if (compareCode) compareCodeInput.value = compareCode;
  submitButton.disabled = true;
  showStatus("Länderdaten werden geladen …");

  try {
    const codes = compareCode ? [mainCode, compareCode] : [mainCode];
    const countries = await Promise.all(codes.map(fetchCountry));
    countries.forEach((country) => results.append(createCountryCard(country)));
    showStatus(countries.length === 2 ? "Vergleichsdaten geladen." : "Länderdaten geladen.");
  } catch (error) {
    showStatus(error.message, true);
  } finally {
    submitButton.disabled = false;
  }
});

form.requestSubmit();
