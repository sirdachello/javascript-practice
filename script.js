"use strict";

// predictions section

let predictionsTimer = document.getElementById(`timer`);
let predictionsButtonStart = document.getElementById("start");
let predictionsButtonStop = document.getElementById("stop");
let predictionsOutput = document.getElementById(`text`);

predictionsButtonStart.addEventListener(`click`, function setUp() {
  predictionsButtonStart.removeEventListener(`click`, setUp);

  predictionsButtonStart.classList.remove(`active`);

  predictionsButtonStop.classList.add(`active`);

  let timerNumber = setInterval(() => {
    predictionsTimer.textContent = getRandomInt(
      1,
      optimisticPredictions.length + pessimisticPredictions.length
    );
  }, 100);

  let optimisticPredictions = [
    "You will receive a pleasant surprise.",
    "A friend will reach out with good news.",
    "You will accomplish a task you've been putting off.",
    "You will find something you thought was lost.",
    "An interesting opportunity will come your way.",
    "You will learn something new and useful.",
    "A small financial gain is on the horizon.",
    "Someone will compliment you on your work.",
    "You will reconnect with an old friend.",
    "An unexpected event will bring joy.",
  ];

  let pessimisticPredictions = [
    "Expect a minor inconvenience in the afternoon.",
    "A challenge will test your patience.",
    "You might face a difficult decision.",
    "You might encounter a misunderstanding with someone.",
    "There could be delays in your plans.",
    "You might feel a bit under the weather.",
    "You could misplace something important.",
    "You might have a disagreement with a coworker.",
    "An unexpected expense may arise.",
    "You could face a minor setback in a project.",
  ];

  predictionsButtonStop.addEventListener(`click`, function providePrediction() {
    predictionsButtonStop.removeEventListener(`click`, providePrediction);
    predictionsButtonStop.classList.remove(`active`);
    clearInterval(timerNumber);

    if (predictionsTimer.textContent % 2 === 0) {
      predictionsOutput.textContent =
        pessimisticPredictions[
          getRandomInt(0, pessimisticPredictions.length - 1)
        ];
      predictionsOutput.style.color = `red`;
    } else {
      predictionsOutput.textContent =
        optimisticPredictions[
          getRandomInt(0, optimisticPredictions.length - 1)
        ];
      predictionsOutput.style.color = `green`;
    }
  });
});

// predictions section end

// autofill section

const countriesByLetter = {
  a: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
  ],
  b: [
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
  ],
  c: [
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
  ],
  d: ["Denmark", "Djibouti", "Dominica", "Dominican Republic"],
  e: [
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
  ],
  f: ["Fiji", "Finland", "France"],
  g: [
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
  ],
  h: ["Haiti", "Honduras", "Hungary"],
  i: [
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
  ],
  j: ["Jamaica", "Japan", "Jordan"],
  k: [
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
  ],
  l: [
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
  ],
  m: [
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
  ],
  n: [
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
  ],
  o: ["Oman"],
  p: [
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
  ],
  q: ["Qatar"],
  r: ["Romania", "Russia", "Rwanda"],
  s: [
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
  ],
  t: [
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
  ],
  u: [
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
  ],
  v: ["Vanuatu", "Vatican City", "Venezuela", "Vietnam"],
  w: ["West Bank"],
  y: ["Yemen"],
  z: ["Zambia", "Zimbabwe"],
};

let autofillInput = document.getElementById(`autofill-input`);
let autofillList = document.getElementById(`autofill-list`);

autofillInput.addEventListener(`input`, () => {
  if (!autofillInput.value || !autofillInput.value.trim()) {
    return;
  }

  let alreadyCreatedPrompts = autofillList.querySelectorAll(`li`);

  for (let elem of alreadyCreatedPrompts) {
    elem.remove();
  }

  let firstLetter = autofillInput.value.slice(0, 1).toLowerCase();

  let countriesArray = countriesByLetter[firstLetter];

  let input = autofillInput.value.toLowerCase();

  let filteredArray = countriesArray.filter((elem) => {
    return elem.toLowerCase().startsWith(input);
  });

  for (let country of filteredArray) {
    let prompt = document.createElement(`li`);
    prompt.textContent = country;

    prompt.addEventListener(`click`, () => {
      autofillInput.value = prompt.textContent;

      alreadyCreatedPrompts = autofillList.querySelectorAll(`li`);
      for (let elem of alreadyCreatedPrompts) {
        elem.remove();
      }
    });
    autofillList.appendChild(prompt);
  }
});

// autofill section end

// spoiler section

let spoilerContainers = document.querySelectorAll(`.spoiler-container`);
let spoilers = document.querySelectorAll(`spoiler`);

for (let container of spoilerContainers) {
  container.addEventListener(`click`, () => {
    container.nextElementSibling.classList.toggle(`active`);
  });
}

// spoiler section end

// tabs section

let navigationItems = document.querySelectorAll(`.tabs-nav-item`);
let tabs = document.querySelectorAll(`.tab`);

for (let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener(`click`, () => {
    for (let tab of tabs) {
      tab.classList.remove(`active`);
    }
    for (let item of navigationItems) {
      item.classList.remove(`active`);
    }
    tabs[i].classList.toggle(`active`);
    navigationItems[i].classList.toggle(`active`);
  });
}

// tabs section end

// accordeon section

let accordeonButtons = document.querySelectorAll(`.accordeon-button`);
let accordeonDescriptions = document.querySelectorAll(`.accordeon-description`);

for (let button of accordeonButtons) {
  button.addEventListener(`click`, () => {
    let targetDescription = button.nextElementSibling;

    if (targetDescription.classList.contains(`active`)) {
      targetDescription.classList.toggle(`active`);
    } else {
      for (let desc of accordeonDescriptions) {
        desc.classList.remove(`active`);
      }
      targetDescription.classList.toggle(`active`);
    }
  });
}

// accordeon section end

// cities section

const validCities = [
  "amsterdam",
  "athens",
  "barcelona",
  "belgrade",
  "berlin",
  "bern",
  "bilbao",
  "birmingham",
  "bologna",
  "bordeaux",
  "bratislava",
  "bristol",
  "brussels",
  "bucharest",
  "budapest",
  "cologne",
  "copenhagen",
  "dortmund",
  "dresden",
  "dublin",
  "duesseldorf",
  "edinburgh",
  "florence",
  "frankfurt",
  "geneva",
  "genoa",
  "glasgow",
  "gothenburg",
  "hamburg",
  "helsinki",
  "istanbul",
  "kiev",
  "krakow",
  "leeds",
  "leipzig",
  "lisbon",
  "ljubljana",
  "lodz",
  "london",
  "lyon",
  "madrid",
  "manchester",
  "marseille",
  "milan",
  "minsk",
  "munich",
  "naples",
  "nice",
  "nicosia",
  "oslo",
  "paris",
  "porto",
  "prague",
  "reykjavik",
  "riga",
  "rome",
  "rotterdam",
  "salzburg",
  "sarajevo",
  "seville",
  "sofia",
  "stockholm",
  "stuttgart",
  "tallinn",
  "tbilisi",
  "the hague",
  "tirana",
  "toulouse",
  "turin",
  "valencia",
  "vienna",
  "vilnius",
  "warsaw",
  "zagreb",
  "zurich",
  "alesund",
  "amersfoort",
  "antwerp",
  "bergen",
  "brno",
  "cluj-napoca",
  "cordoba",
  "cork",
  "cosenza",
  "crete",
  "debrecen",
  "dusseldorf",
  "gdansk",
  "grenoble",
  "hagen",
  "hanover",
  "kaunas",
  "kosice",
  "luxembourg",
  "malaga",
  "palermo",
  "pescara",
  "split",
  "tampere",
  "trieste",
  "wroclaw",
  "santiago",
  "los angeles",
  "new york",
  "tokyo",
  "sydney",
  "cape town",
  "cairo",
  "mumbai",
  "rio de janeiro",
  "vancouver",
  "toronto",
  "singapore",
  "bangkok",
  "dubai",
  "moscow",
  "kyiv",
  "shanghai",
  "beijing",
  "hong kong",
  "jakarta",
  "budapest",
  "prague",
  "vienna",
  "lisbon",
  "madrid",
  "barcelona",
  "berlin",
  "paris",
  "rome",
  "amsterdam",
  "athens",
  "istanbul",
  "warsaw",
  "bucharest",
  "brussels",
  "budapest",
  "sevastopol",
  "stockholm",
  "vienna",
  "berlin",
  "copenhagen",
  "amsterdam",
  "athens",
  "lisbon",
  "helsinki",
  "oslo",
  "dublin",
  "luxembourg",
  "london",
  "bern",
  "berne",
  "bratislava",
  "andorra la vella",
  "sofia",
  "zagreb",
  "tallinn",
  "riga",
  "vilnius",
  "san marino",
  "monte carlo",
  "monaco",
  "san francisco",
  "los angeles",
  "seattle",
  "vancouver",
  "toronto",
  "mexico city",
  "buenos aires",
  "santiago",
  "lima",
  "rio de janeiro",
  "saõ paulo",
  "bogotá",
  "quito",
  "caracas",
  "brasília",
  "lisbon",
  "porto",
  "madrid",
  "barcelona",
  "valencia",
  "seville",
  "malaga",
  "granada",
  "bilbao",
  "ibiza",
  "palma de mallorca",
  "tenerife",
  "athens",
  "thessaloniki",
  "crete",
  "rhodes",
  "mykonos",
  "santorini",
  "budapest",
  "debrecen",
  "szeged",
  "miskolc",
  "székesfehérvár",
  "szombathely",
  "szolnok",
  "győr",
  "pécs",
  "szeged",
  "stockholm",
  "gothenburg",
  "malmö",
  "uppsala",
  "västerås",
  "umeå",
  "linköping",
  "helsingborg",
  "borås",
  "kalmar",
  "karlstad",
  "jönköping",
  "växjö",
  "norrköping",
  "lund",
  "eskilstuna",
  "halmstad",
  "luleå",
  "falun",
  "gävle",
  "visby",
  "kiruna",
  "umeå",
  "tromsø",
  "stavanger",
  "trondheim",
  "bergen",
  "oslo",
  "oslo",
  "stavanger",
  "trondheim",
  "bergen",
  "oslo",
  "bergen",
  "tromsø",
  "drammen",
  "sandnes",
  "sarpsborg",
  "skien",
  "ålesund",
  "haugesund",
  "østfold",
  "kristiansand",
  "fredrikstad",
  "sørlandet",
  "bodø",
  "molde",
  "larvik",
  "tonsberg",
  "sandefjord",
  "vestfold",
  "hamar",
  "lillehammer",
  "moss",
  "kongsberg",
  "asker",
  "østlandet",
  "kristiansund",
  "alesund",
  "amersfoort",
  "antwerp",
  "bergen",
  "brno",
  "cluj-napoca",
  "cordoba",
  "cork",
  "cosenza",
  "crete",
  "debrecen",
  "dusseldorf",
  "gdansk",
  "grenoble",
  "hagen",
  "hanover",
  "kaunas",
  "kosice",
  "luxembourg",
  "malaga",
  "palermo",
  "pescara",
  "split",
  "tampere",
  "trieste",
  "wroclaw",
  "bruges",
  "ghent",
  "leuven",
  "mechelen",
  "mons",
  "namur",
  "liege",
  "charleroi",
  "antwerp",
  "ypres",
  "knokke-heist",
  "ostend",
  "louvain-la-neuve",
  "bruges",
  "ghent",
  "leuven",
  "mechelen",
  "mons",
  "namur",
  "liege",
  "charleroi",
  "antwerp",
  "ypres",
  "knokke-heist",
  "ostend",
  "louvain-la-neuve",
  "zurich",
  "geneva",
  "basel",
  "lucerne",
  "bern",
  "lausanne",
  "zermatt",
  "interlaken",
  "lugano",
  "st. moritz",
  "grindelwald",
  "davos",
  "locarno",
  "appenzell",
  "thun",
  "baden",
  "neuchatel",
  "aarau",
  "vevey",
  "biel",
  "fribourg",
  "bellinzona",
  "schaffhausen",
  "st. gallen",
  "winterthur",
  "solothurn",
  "zug",
  "morges",
  "montreux",
  "nyon",
  "sion",
  "martigny",
  "baden-baden",
  "heidelberg",
  "mannheim",
  "freiburg",
  "karlsruhe",
  "ulm",
  "stuttgart",
  "tübingen",
  "esslingen",
  "pforzheim",
  "ravensburg",
  "friedrichshafen",
  "konstanz",
  "ludwigsburg",
  "reutlingen",
  "sindelfingen",
  "offenburg",
  "villingen-schwenningen",
  "esslingen am neckar",
  "wiesbaden",
  "mainz",
  "darmstadt",
  "kassel",
  "fulda",
  "giessen",
  "marburg",
  "bad homburg",
  "offenbach",
  "hanau",
  "rüsselsheim",
  "worms",
  "speyer",
  "neustadt",
  "ludwigshafen",
  "landau",
  "frankenthal",
  "bad kreuznach",
  "ingelheim",
  "idstein",
  "limburg",
  "neuwied",
  "mayence",
  "neustadt an der weinstrasse",
  "frankenthal am main",
  "ludwigshafen am rhein",
  "landau in der pfalz",
  "bad kreuznach am rhein",
  "ingelheim am rhein",
  "idstein am rhein",
  "limburg an der lahn",
  "neuwied am rhein",
  "ludwigsburg",
  "reutlingen",
  "sindelfingen",
  "offenburg",
  "villingen-schwenningen",
  "esslingen am neckar",
  "wiesbaden",
  "mainz",
  "darmstadt",
  "kassel",
  "fulda",
  "giessen",
  "marburg",
  "bad homburg",
  "offenbach",
  "hanau",
  "rüsselsheim",
  "worms",
  "speyer",
  "neustadt",
  "ludwigshafen",
  "landau",
  "frankenthal",
];

let citiesInput = document.getElementById(`cities-input`);
let citiesOutput = document.getElementById(`cities-output`);

let usedCities = [];

(function provideFirstWord() {
  usedCities.push(validCities[Math.floor(Math.random() * validCities.length)]);
  citiesOutput.textContent = `The first city is "${usedCities[0]}"`;
})();

// IIFE instantly initialized function expression

citiesInput.addEventListener(`change`, citiesGame);

async function citiesGame() {
  citiesOutput.textContent = ``;

  let lastCityUsed;
  let lastLetterToMatch;

  let playerInput = citiesInput.value.toLowerCase();

  if (isInUsedCities(playerInput)) {
    citiesOutput.textContent = `Sorry, the city has already been used, try a new one!`;
    return;
  }
  if (!isInValidCities(playerInput)) {
    citiesOutput.textContent = `No such city is known, please, check the spelling or try a new city!`;
    return;
  }
  if (!firstLetterMatchesRight(playerInput)) {
    lastCityUsed = usedCities[usedCities.length - 1];
    lastLetterToMatch = lastCityUsed[lastCityUsed.length - 1];
    citiesOutput.textContent = `The first letter has to be "${lastLetterToMatch.toUpperCase()}"`;
    return;
  }

  addToUsedCities(playerInput);
  console.log(`used cities: ${usedCities}`);
  lastCityUsed = usedCities[usedCities.length - 1];
  lastLetterToMatch = lastCityUsed[lastCityUsed.length - 1];
  citiesOutput.textContent = `Good job, now the last letter is "${lastLetterToMatch.toUpperCase()}"`;

  async function generateNextCity() {
    citiesOutput.textContent = `Nice guess! I am thinking of another city...`;
    setTimeout(() => {
      let nextCity = validCities.filter((city) => {
        let cityFirstLetter = city[0];
        let lastCityUsed = usedCities[usedCities.length - 1];
        let lastLetterToMatch = lastCityUsed[lastCityUsed.length - 1];
        return (
          !isInUsedCities(city) &&
          isInValidCities(city) &&
          cityFirstLetter === lastLetterToMatch
        );
      })[0];

      if (nextCity) {
        addToUsedCities(nextCity);
        console.log(`used cities: ${usedCities}`);
        citiesOutput.textContent = `Okay, my guess is: "${nextCity}" `;
      } else {
        citiesOutput.textContent = `Sorry, I could not generate a new word, please, try again`;
      }
    }, 2000);
  }

  await generateNextCity();
}

// cities helper functions
function isInValidCities(input) {
  return validCities.some((elem) => elem === input);
}

function isInUsedCities(input) {
  return usedCities.some((elem) => elem === input);
}

function addToUsedCities(input) {
  usedCities.push(input);
}

function firstLetterMatchesRight(input) {
  let inputFirstLetter = input[0];
  let lastCityUsed = usedCities[usedCities.length - 1];
  let lastLetterToMatch = lastCityUsed[lastCityUsed.length - 1];
  return inputFirstLetter === lastLetterToMatch;
}
// cities helper functions end

// cities section end

// to-Do list sectiond

const toDoInput = document.getElementById(`toDo-input`);
const toDoButtonAdd = document.getElementById(`toDo-button`);
const toDoList = document.querySelector(`.toDo-list`);

toDoInput.addEventListener(`keypress`, (e) => {
  if (e.key === "Enter") {
    addListItem();
  }
});

toDoButtonAdd.addEventListener(`click`, addListItem);

function addListItem() {
  if (!toDoInput.value) {
    return;
  }
  let newListItem = document.createElement(`li`);

  // text-change functionality section
  let textToChange = document.createElement(`span`);
  textToChange.textContent = toDoInput.value;
  toDoInput.value = ``;

  newListItem.insertAdjacentElement(`afterbegin`, textToChange);

  textToChange.addEventListener(`dblclick`, function changeContent() {
    textToChange.removeEventListener(`dblclick`, changeContent);
    let textToChangeInput = document.createElement(`input`);
    textToChangeInput.value = textToChange.textContent;
    textToChange.textContent = ``;

    setTimeout(() => {
      textToChangeInput.focus();
    }, 150);

    textToChangeInput.addEventListener(`change`, handleChange);
    textToChangeInput.addEventListener(`blur`, handleChange);

    function handleChange() {
      if (!textToChangeInput.value) {
        newListItem.remove();
      }

      textToChange.textContent = textToChangeInput.value;
      textToChangeInput.remove();
      textToChange.addEventListener(`dblclick`, changeContent);
    }

    newListItem.insertAdjacentElement(`beforeEnd`, textToChangeInput);
  });

  // text-change functionality section end

  // "done" functionality section

  let toggleDoneButton = document.createElement(`button`);
  toggleDoneButton.classList.add(`toggleDoneButton`);

  toggleDoneButton.addEventListener(`click`, () => {
    toggleDoneButton.classList.toggle(`done`);
    textToChange.classList.toggle(`completed`);
  });

  newListItem.insertAdjacentElement(`afterbegin`, toggleDoneButton);

  // "done" functionality section end

  // "remove" functionality section

  let removeButton = document.createElement(`button`);
  removeButton.classList.add(`toDo-removeButton`);

  removeButton.addEventListener(`click`, () => {
    newListItem.remove();
  });

  newListItem.insertAdjacentElement(`afterbegin`, removeButton);

  // "remove" functionality section end
  toDoList.appendChild(newListItem);
}

// to-Do list sectiond end

// calculator-table section

const entityName = document.getElementById(`entity-name`);
const entityPrice = document.getElementById(`entity-price`);
const entityAmount = document.getElementById(`entity-amount`);
const addEntityButton = document.getElementById(`entity-enter-button`);

let tableBody = document.querySelector(`.calculator-table-body`);
let tableTotal = document.querySelector(`.calculator-table-total`);

addEntityButton.addEventListener(`click`, addTableEntity);

function addTableEntity() {
  let inputs = [entityName, entityPrice, entityAmount];

  for (let input of inputs) {
    if (!input.value) {
      input.focus();
      return;
    }
  }

  let newRow = document.createElement(`tr`);

  let name = entityName.value;
  let price = entityPrice.value;
  let amount = entityAmount.value;

  let nameElement = document.createElement(`td`);
  nameElement.textContent = name;
  nameElement.addEventListener(`dblclick`, redactElement);

  let priceElement = document.createElement(`td`);
  priceElement.textContent = price;
  priceElement.classList.add(`price`);
  priceElement.addEventListener(`dblclick`, redactElement);

  let amountElement = document.createElement(`td`);
  amountElement.textContent = amount;
  amountElement.classList.add(`amount`);
  amountElement.addEventListener(`dblclick`, redactElement);

  let sumElement = document.createElement(`td`);
  sumElement.textContent = price * amount;
  sumElement.classList.add(`sum`);
  let deleteElement = document.createElement(`td`);
  deleteElement.textContent = `Delete`;
  deleteElement.addEventListener(`click`, () => {
    newRow.remove();
    updateTotal();
  });

  newRow.appendChild(nameElement);
  newRow.appendChild(priceElement);
  newRow.appendChild(amountElement);
  newRow.appendChild(sumElement);
  newRow.appendChild(deleteElement);

  tableBody.appendChild(newRow);

  updateTotal();

  // update total
  function updateTotal() {
    let sums = Array.from(tableBody.querySelectorAll(`.sum`));
    let price = Array.from(tableBody.querySelectorAll(`.price`));
    let amount = Array.from(tableBody.querySelectorAll(`.amount`));
    let total = 0;

    for (let i = 0; i < price.length; i++) {
      sums[i].textContent = price[i].textContent * amount[i].textContent;
      total += +sums[i].textContent;
      console.log(sums[i]);
      console.log(price[i]);
      console.log(amount[i]);
      console.log(total);
    }
    tableTotal.textContent = `Total: ${total}$`;
  }

  // redacting td

  function redactElement() {
    this.classList.add(`activeTD`);
    let self = this;
    let redactInput = document.createElement(`input`);
    redactInput.value = this.textContent;
    this.textContent = ``;
    this.insertAdjacentElement(`beforeEnd`, redactInput);

    setTimeout(() => {
      redactInput.focus();
    }, 100);

    function updateContent() {
      self.textContent = redactInput.value;
      redactInput.remove();
      updateTotal();
    }

    redactInput.addEventListener(`keypress`, (e) => {
      if (e.key === `Enter`) {
        self.classList.remove(`activeTD`);
        updateContent();
      }
    });

    redactInput.addEventListener(`blur`, () => {
      self.classList.remove(`activeTD`);
      updateContent();
    });
  }
}

// calculator-table section end

// test section

let answers = Array.from(document.querySelectorAll(`.test input`));
let checkButton = document.getElementById(`check-button`);

checkButton.addEventListener(`click`, checkCorrectness);

function checkCorrectness() {
  for (let i = 0; i < answers.length; i++) {
    console.log(answersObj[`answer_${i + 1}`]);
    if (answers[i].value === answersObj[`answer_${i + 1}`]) {
      answers[i].classList.remove(`wrong`);
      answers[i].classList.add(`right`);
    } else {
      answers[i].classList.remove(`right`);
      answers[i].classList.add(`wrong`);
    }
  }
}

for (let answer of answers) {
  answer.addEventListener(`keypress`, (e) => {
    if (e.key === `Enter`) {
      if (answer.value.toLowerCase() === answer.dataset.answer) {
        answer.classList.remove(`wrong`);
        answer.classList.add(`right`);
        answer.blur();
      } else {
        answer.classList.remove(`right`);
        answer.classList.add(`wrong`);
        answer.blur();
      }
    }
  });
}

// test section end

// test-created section

let questionsObj = {
  question_1: `6 + x = nice`,
  question_2: `Meaning of the multiverse?`,
  question_3: `Ass or titties?`,
  question_4: `Why ass?`,
  question_5: `Else?`,
  question_6: `Something?`,
};

let answersObj = {
  answer_1: `9`,
  answer_2: `42`,
  answer_3: `ass`,
  answer_4: `because`,
  answer_5: `else`,
  answer_6: `something`,
};

let testCreated = document.querySelector(`.test-created`);
let checkCreatedButton = document.getElementById(`check-created-button`);

// table-creation subsection

for (let i = 1; i <= Object.keys(questionsObj).length; i++) {
  let div = document.createElement(`div`);
  div.classList.add(`question-block`);

  let p = document.createElement(`p`);
  p.textContent = questionsObj[`question_${i}`];

  let input = document.createElement(`input`);
  input.setAttribute("id", `question-created-${i}`);
  input.classList.add(`question-created-${i}`);

  input.addEventListener(`keypress`, (e) => {
    if (e.key === `Enter`) {
      if (input.value.toLowerCase() === answersObj[`answer_${i}`]) {
        input.classList.remove(`wrong`);
        input.classList.add(`right`);
        input.blur();
      } else {
        input.classList.remove(`right`);
        input.classList.add(`wrong`);
        input.blur();
      }
    }
  });

  let label = document.createElement(`label`);
  label.textContent = `Answer: `;
  label.setAttribute("for", `question-created-${i}`);

  div.appendChild(p);
  div.appendChild(label);
  div.appendChild(input);

  testCreated.appendChild(div);
}

checkCreatedButton.addEventListener(`click`, checkCreatedCorrectness);
let createdInputs = Array.from(
  document.querySelectorAll(`.test-created-article input`)
);

function checkCreatedCorrectness() {
  for (let i = 0; i < Object.keys(questionsObj).length; i++) {
    if (
      createdInputs[i].value.toLowerCase() === answersObj[`answer_${i + 1}`]
    ) {
      createdInputs[i].classList.remove(`wrong`);
      createdInputs[i].classList.add(`right`);
    } else {
      createdInputs[i].classList.remove(`right`);
      createdInputs[i].classList.add(`wrong`);
    }
  }
}

// table-creation subsection end

// test-created section end

// radio-test section

const question1inputs = document.querySelectorAll(`input[name="question-1"]`);
const radioTestBlock = document.querySelector(`.radio-test-block`);

const radioQuestions = [
  {
    question: "12 + 15 = x",
    wrong: [20, 25],
    correct: 27,
  },
  {
    question: "18 / 2 = x",
    wrong: [7, 10],
    correct: 9,
  },
  {
    question: "5 * 7 = x",
    wrong: [30, 45],
    correct: 35,
  },
  {
    question: "144 / 12 = x",
    wrong: [10, 15],
    correct: 12,
  },
  {
    question: "25 - 17 = x",
    wrong: [5, 9],
    correct: 8,
  },
  {
    question: "8^2 = x",
    wrong: [63, 49],
    correct: 64,
  },
  {
    question: "√81 = x",
    wrong: [7, 10],
    correct: 9,
  },
];

function createRadioTest() {
  let allInputPairs = [];
  let counter = 1;
  radioQuestions.forEach((elem) => {
    // question block for each questinon
    let div = document.createElement(`div`);
    div.classList.add(`radio-question`);

    // question for each question block
    let p = document.createElement(`p`);
    p.classList.add(`question-${counter}`);
    p.textContent = elem.question;
    div.appendChild(p);

    // wrong answers for each question
    elem.wrong.forEach((wrongAnswer) => {
      let pair = [];

      let label = document.createElement(`label`);
      label.setAttribute(`for`, `question-${counter}`);
      label.textContent = wrongAnswer;

      let input = document.createElement(`input`);
      input.setAttribute(`type`, `radio`);
      input.setAttribute(`name`, `question-${counter}`);

      pair.push(label);
      pair.push(input);

      allInputPairs.push(pair);
    });

    // correct answer for each question [ -, -, +]
    let pair = [];

    let label = document.createElement(`label`);
    label.setAttribute(`for`, `question-${counter}`);
    label.textContent = elem.correct;

    let input = document.createElement(`input`);
    input.setAttribute(`type`, `radio`);
    input.setAttribute(`name`, `question-${counter}`);
    input.setAttribute(`data-right`, `true`);

    pair.push(label);
    pair.push(input);
    allInputPairs.push(pair);

    let shuffledAllInputPairs = shuffle(allInputPairs);
    shuffledAllInputPairs.forEach((pair) => {
      p.insertAdjacentElement(`afterEnd`, pair[0]);
      p.insertAdjacentElement(`afterEnd`, pair[1]);
    });

    radioTestBlock.appendChild(div);
    counter++;
    allInputPairs = [];
  });
}

createRadioTest();

let radioButton = document.createElement(`button`);
radioButton.id = `radio-test-button`;
radioButton.textContent = `Check Answers`;
radioTestBlock.appendChild(radioButton);

radioButton.addEventListener(`click`, (e) => {
  let questionBlocks = document.querySelectorAll(
    `.radio-test-block .radio-question`
  );
  for (let block of questionBlocks) {
    let inputs = block.querySelectorAll(`input[name]`);
    let correctInput = Array.from(inputs).find(
      (input) => input.checked && input.hasAttribute(`data-right`)
    );
    if (correctInput) {
      block.style.border = `2px solid green`;
    } else {
      block.style.border = `2px solid red`;
    }
  }
});
// radio-test section end

// slider sectiond

const slider = document.getElementById(`slider`);
const sliderImage = document.getElementById(`slider-image`);
const prevSliderButton = document.getElementById(`slider-button-prev`);
const nextSliderButton = document.getElementById(`slider-button-next`);

const sliderText = [
  `Learn Javascript`,
  `Master CSS`,
  `Tackle HTML`,
  `Understand Algorithms`,
];

const sliderPictures = [
  `https://picsum.photos/200/75`,
  `https://picsum.photos/200/76`,
  `https://picsum.photos/200/74`,
  `https://picsum.photos/200/77`,
];

let currentIndex = 0;
nextSliderButton.addEventListener(`click`, () => {
  // if (currentIndex === 3) {
  //   return
  // }
  currentIndex = (currentIndex + 1) % sliderText.length;
  slider.textContent = sliderText[currentIndex];
  sliderImage.src = sliderPictures[currentIndex];
  console.log(currentIndex);
});
prevSliderButton.addEventListener(`click`, () => {
  // if (currentIndex === 0) {
  //   return
  // }
  currentIndex = (currentIndex - 1 + sliderText.length) % sliderText.length;
  slider.textContent = sliderText[currentIndex];
  sliderImage.src = sliderPictures[currentIndex];
  console.log(currentIndex);
});
(function sliderImageRotation() {
  let i = 0;
  setInterval(() => {
    sliderImage.src = sliderPictures[i];
    i = (i + 1) % sliderPictures.length;
  }, 2000);
})();

// slider sectiond end

// second-slider section

const secondSliderImages = document.querySelectorAll(`.second-slider img`);

const secondSlider = setInterval(changeSecondSliderImage, 1500);

let secondSliderIterator = 0;
function changeSecondSliderImage() {
  secondSliderImages.forEach((elem) => elem.classList.remove(`visible`));
  secondSliderIterator = (secondSliderIterator + 1) % secondSliderImages.length;
  secondSliderImages[secondSliderIterator].classList.add(`visible`);
}

// second-slider section end

// tic-tac-toe section

let gameField = document.getElementById(`ttt-table`);
let gameCells = gameField.querySelectorAll(`td`);

gameCells.forEach((cell) => {
  cell.addEventListener(`click`, markCell);
});

let player = 0;
function markCell() {
  if (this.textContent === ``) {
    this.textContent = ["X", "O"][player % 2];
    console.log(this.textContent);
    this.classList.add(`marked${["X", "O"][player % 2]}`);
    checkWin();
    player++;
  }
}

let tttWinConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function checkWin() {
  for (let condition of tttWinConditions) {
    if (
      gameCells[condition[0]].textContent !== `` &&
      gameCells[condition[1]].textContent !== `` &&
      gameCells[condition[2]].textContent !== `` &&
      gameCells[condition[0]].textContent ===
        gameCells[condition[1]].textContent &&
      gameCells[condition[0]].textContent ===
        gameCells[condition[2]].textContent
    ) {
      gameCells[condition[0]].style.borderRadius = `20px`;
      gameCells[condition[1]].style.borderRadius = `20px`;
      gameCells[condition[2]].style.borderRadius = `20px`;
      gameCells[condition[0]].style.border = `5px solid green`;
      gameCells[condition[1]].style.border = `5px solid green`;
      gameCells[condition[2]].style.border = `5px solid green`;
      gameCells.forEach((cell) => {
        cell.removeEventListener(`click`, markCell);
      });
      break;
    } else if (player === 8) {
      gameCells.forEach((cell) => {
        cell.removeEventListener(`click`, markCell);
        cell.style.borderRadius = `5px`;
        cell.style.border = `10px solid red`;
      });
      break;
    }
  }
}

let tttResetButton = document.getElementById(`ttt-reset-button`);

tttResetButton.addEventListener(`click`, () => {
  gameCells.forEach((cell) => {
    cell.textContent = ``;
    cell.classList.remove(`markedO`, `markedX`);
    cell.style.borderRadius = `0`;
    cell.style.border = `1px solid black`;
    player = 0;
    cell.addEventListener(`click`, markCell);
  });
});

// tic-tac-toe section end

// changing colors section

let changingTable = document.querySelector(`.changing-colors-table`);
let changingTableRows = 3;
let changingTableCols = 3;
let changingTableColors = [`cell_red`, `cell_green`, `cell_blue`];
let changingTableSteps = 0;
let stepsShowcase = document.querySelector(`.changing-table-steps`);

function createChangingTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement(`tr`);
    tr.classList.add(`changing-table-row`);
    for (let i = 0; i < cols; i++) {
      let td = document.createElement(`td`);
      td.classList.add(`changing-table-cell`);
      manageColorClass(td);
      tr.appendChild(td);
    }
    changingTable.appendChild(tr);
  }
}

createChangingTable(changingTableRows, changingTableCols);

function manageColorClass(elem) {
  let self = this;
  let currentClass = Math.floor(Math.random() * changingTableColors.length);
  elem.classList.add(changingTableColors[currentClass]);

  elem.addEventListener(`click`, function manageClicks() {
    changingTableSteps++;
    stepsShowcase.textContent = changingTableSteps;
    elem.classList.remove(changingTableColors[currentClass]);
    currentClass = (currentClass + 1) % changingTableColors.length;
    elem.classList.add(changingTableColors[currentClass]);
    if (isWinState()) {
      let elems = document.querySelectorAll(`.changing-table-cell`);
      elems.forEach((cell) => {
        cell.removeEventListener(`click`, manageClicks);
      });
      stepsShowcase.textContent = `Good job, you won in ${changingTableSteps} steps!`;
      changingTableSteps = 0;
    }
  });
}

function isWinState() {
  let tds = changingTable.querySelectorAll(`td`);
  let classesArray = [];
  for (let td of tds) {
    let filteredClasses = Array.from(td.classList).filter((className) =>
      className.startsWith("cell")
    );
    classesArray.push(filteredClasses);
  }
  let firstElement = classesArray.flat()[0];
  return classesArray.flat().every((elem) => elem === firstElement);
}

// changing colors section end

// calendar section

let calendar = document.querySelector(`.calendar`);
let body = calendar.querySelector(`.calendar-body`);
let calendarInfo = calendar.querySelector(`.calendar-info`);

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

drawCalendar(body, year, month);

// console.log(getLastDay(2024, 1)); 1 = jan 2 = feb ...
// console.log(getFirstWeekDay(2024, 1));
// console.log(getLastWeekDay(2024, 1));

function getLastDay(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekDay(year, month) {
  return new Date(year, month, 1).getDay();
}

function getLastWeekDay(year, month) {
  return new Date(year, month + 1, 0).getDay();
}

function range(count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}

let calendarMonthDays = range(getLastDay(year, month));
let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay = getLastWeekDay(year, month);

// Add empty spaces so that days align to week days

function normalize(arr, left, right) {
  let changedArr = arr;
  for (let i = 0; i < left; i++) {
    changedArr.unshift(``);
  }
  for (let i = 0; i < 6 - right; i++) {
    changedArr.push(``);
  }
  return changedArr;
}

let normalizedCalendarMonthDays = normalize(
  calendarMonthDays,
  firstWeekDay,
  lastWeekDay
);

// Break the array into sub-arrays (to create weeks)

function chunk(arr, n) {
  let arrays = [];
  for (let i = 0; i < arr.length; i += n) {
    arrays.push(arr.slice(i, i + n));
  }
  return arrays;
}

let calendarArray = chunk(normalizedCalendarMonthDays, 7);

// function that generates the table;

function createCalendarTable(parent, arr) {
  for (let week of arr) {
    let tr = document.createElement(`tr`);
    for (let day of week) {
      let td = document.createElement(`td`);
      td.textContent = day;
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}

// putting the table on the page with everything together

function drawCalendar(body, year, month) {
  let arr = range(getLastDay(year, month));

  let firstWeekDay = getFirstWeekDay(year, month);
  let lastWeekDay = getLastWeekDay(year, month);

  let nums = chunk(normalize(arr, firstWeekDay, lastWeekDay), 7);

  createCalendarTable(body, nums);
}

let calendarButtonPrev = document.getElementById(`calendar-button-prev`);
let calendarButtonNext = document.getElementById(`calendar-button-next`);
let monthsForCalendar = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];

calendarButtonNext.addEventListener(`click`, () => {
  // remove existing calendar
  let currentCalendar = body.querySelectorAll(`*`);
  currentCalendar.forEach((elem) => elem.remove());

  // adjust the month and year, redraw it to the output
  month++;
  let yearToShow = new Date(year, month).getFullYear();

  calendarInfo.textContent = `${
    monthsForCalendar[month % monthsForCalendar.length]
  } ${yearToShow}`;

  // create new table
  drawCalendar(body, year, month);
});

calendarButtonPrev.addEventListener(`click`, () => {
  // remove existing calendar
  let currentCalendar = body.querySelectorAll(`*`);
  currentCalendar.forEach((elem) => elem.remove());

  // adjust the month and year, redraw it to the output
  month--;

  let monthToShow =
    ((month % monthsForCalendar.length) + monthsForCalendar.length) %
    monthsForCalendar.length;

  let yearToShow = new Date(year, month).getFullYear();
  calendarInfo.textContent = `${monthsForCalendar[monthToShow]} ${yearToShow}`;

  // create new table
  drawCalendar(body, year, month);
});

// createCalendarTable(body, calendarArray);

// calendar section end

// helper functions

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}
