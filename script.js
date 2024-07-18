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
  "amsterdam", "athens", "barcelona", "belgrade", "berlin", "bern", "bilbao", "birmingham",
  "bologna", "bordeaux", "bratislava", "bristol", "brussels", "bucharest", "budapest",
  "cologne", "copenhagen", "dortmund", "dresden", "dublin", "duesseldorf", "edinburgh",
  "florence", "frankfurt", "geneva", "genoa", "glasgow", "gothenburg", "hamburg", "helsinki",
  "istanbul", "kiev", "krakow", "leeds", "leipzig", "lisbon", "ljubljana", "lodz", "london",
  "lyon", "madrid", "manchester", "marseille", "milan", "minsk", "munich", "naples", "nice",
  "nicosia", "oslo", "paris", "porto", "prague", "reykjavik", "riga", "rome", "rotterdam",
  "salzburg", "sarajevo", "seville", "sofia", "stockholm", "stuttgart", "tallinn", "tbilisi",
  "the hague", "tirana", "toulouse", "turin", "valencia", "vienna", "vilnius", "warsaw",
  "zagreb", "zurich", "alesund", "amersfoort", "antwerp", "bergen", "brno", "cluj-napoca",
  "cordoba", "cork", "cosenza", "crete", "debrecen", "dusseldorf", "gdansk", "grenoble",
  "hagen", "hanover", "kaunas", "kosice", "luxembourg", "malaga", "palermo", "pescara",
  "split", "tampere", "trieste", "wroclaw", "santiago", "los angeles", "new york",
  "tokyo", "sydney", "cape town", "cairo", "mumbai", "rio de janeiro", "vancouver",
  "toronto", "singapore", "bangkok", "dubai", "moscow", "kyiv", "shanghai", "beijing",
  "hong kong", "jakarta", "budapest", "prague", "vienna", "lisbon", "madrid", "barcelona",
  "berlin", "paris", "rome", "amsterdam", "athens", "istanbul", "warsaw", "bucharest",
  "brussels", "budapest", "sevastopol", "stockholm", "vienna", "berlin", "copenhagen", "amsterdam",
  "athens", "lisbon", "helsinki", "oslo", "dublin", "luxembourg", "london", "bern", "berne",
  "bratislava", "andorra la vella", "sofia", "zagreb", "tallinn", "riga", "vilnius", "san marino",
  "monte carlo", "monaco", "san francisco", "los angeles", "seattle", "vancouver", "toronto",
  "mexico city", "buenos aires", "santiago", "lima", "rio de janeiro", "saõ paulo", "bogotá",
  "quito", "caracas", "brasília", "lisbon", "porto", "madrid", "barcelona", "valencia", "seville",
  "malaga", "granada", "bilbao", "ibiza", "palma de mallorca", "tenerife", "athens", "thessaloniki",
  "crete", "rhodes", "mykonos", "santorini", "budapest", "debrecen", "szeged", "miskolc",
  "székesfehérvár", "szombathely", "szolnok", "győr", "pécs", "szeged", "stockholm", "gothenburg",
  "malmö", "uppsala", "västerås", "umeå", "linköping", "helsingborg", "borås", "kalmar",
  "karlstad", "jönköping", "växjö", "norrköping", "lund", "eskilstuna", "halmstad", "luleå",
  "falun", "gävle", "visby", "kiruna", "umeå", "tromsø", "stavanger", "trondheim", "bergen",
  "oslo", "oslo", "stavanger", "trondheim", "bergen", "oslo", "bergen", "tromsø", "drammen",
  "sandnes", "sarpsborg", "skien", "ålesund", "haugesund", "østfold", "kristiansand", "fredrikstad",
  "sørlandet", "bodø", "molde", "larvik", "tonsberg", "sandefjord", "vestfold", "hamar", "lillehammer",
  "moss", "kongsberg", "asker", "østlandet", "kristiansund", "alesund", "amersfoort", "antwerp",
  "bergen", "brno", "cluj-napoca", "cordoba", "cork", "cosenza", "crete", "debrecen", "dusseldorf",
  "gdansk", "grenoble", "hagen", "hanover", "kaunas", "kosice", "luxembourg", "malaga", "palermo",
  "pescara", "split", "tampere", "trieste", "wroclaw", "bruges", "ghent", "leuven", "mechelen",
  "mons", "namur", "liege", "charleroi", "antwerp", "ypres", "knokke-heist", "ostend", "louvain-la-neuve",
  "bruges", "ghent", "leuven", "mechelen", "mons", "namur", "liege", "charleroi", "antwerp",
  "ypres", "knokke-heist", "ostend", "louvain-la-neuve", "zurich", "geneva", "basel", "lucerne",
  "bern", "lausanne", "zermatt", "interlaken", "lugano", "st. moritz", "grindelwald", "davos",
  "locarno", "appenzell", "thun", "baden", "neuchatel", "aarau", "vevey", "biel", "fribourg",
  "bellinzona", "schaffhausen", "st. gallen", "winterthur", "solothurn", "zug", "morges", "montreux",
  "nyon", "sion", "martigny", "baden-baden", "heidelberg", "mannheim", "freiburg", "karlsruhe",
  "ulm", "stuttgart", "tübingen", "esslingen", "pforzheim", "ravensburg", "friedrichshafen",
  "konstanz", "ludwigsburg", "reutlingen", "sindelfingen", "offenburg", "villingen-schwenningen",
  "esslingen am neckar", "wiesbaden", "mainz", "darmstadt", "kassel", "fulda", "giessen",
  "marburg", "bad homburg", "offenbach", "hanau", "rüsselsheim", "worms", "speyer", "neustadt",
  "ludwigshafen", "landau", "frankenthal", "bad kreuznach", "ingelheim", "idstein", "limburg",
  "neuwied", "mayence", "neustadt an der weinstrasse", "frankenthal am main", "ludwigshafen am rhein",
  "landau in der pfalz", "bad kreuznach am rhein", "ingelheim am rhein", "idstein am rhein",
  "limburg an der lahn", "neuwied am rhein", "ludwigsburg", "reutlingen", "sindelfingen", "offenburg",
  "villingen-schwenningen", "esslingen am neckar", "wiesbaden", "mainz", "darmstadt", "kassel",
  "fulda", "giessen", "marburg", "bad homburg", "offenbach", "hanau", "rüsselsheim", "worms",
  "speyer", "neustadt", "ludwigshafen", "landau", "frankenthal",]



let citiesInput = document.getElementById(`cities-input`);
let citiesOutput = document.getElementById(`cities-output`);

let usedCities = [];

;(function provideFirstWord() {
  usedCities.push(validCities[Math.floor(Math.random() * validCities.length)])
  citiesOutput.textContent = `The first city is "${usedCities[0]}"`;
})();

// IIFE instantly initialized function expression


citiesInput.addEventListener(`change`, citiesGame)

async function citiesGame(){
  citiesOutput.textContent = ``;

  let lastCityUsed;
  let lastLetterToMatch;

  let playerInput = citiesInput.value.toLowerCase();

  if (isInUsedCities(playerInput)) {
    citiesOutput.textContent = `Sorry, the city has already been used, try a new one!`;
    return
  }
  if (!isInValidCities(playerInput)) {
    citiesOutput.textContent = `No such city is known, please, check the spelling or try a new city!`;
    return
  }
  if (!firstLetterMatchesRight(playerInput)) {
    lastCityUsed = usedCities[usedCities.length-1];
    lastLetterToMatch = lastCityUsed[lastCityUsed.length-1]
    citiesOutput.textContent = `The first letter has to be "${lastLetterToMatch.toUpperCase()}"`;
    return
  }

  addToUsedCities(playerInput);
  console.log(`used cities: ${usedCities}`);
  lastCityUsed = usedCities[usedCities.length-1];
  lastLetterToMatch = lastCityUsed[lastCityUsed.length-1]
  citiesOutput.textContent = `Good job, now the last letter is "${lastLetterToMatch.toUpperCase()}"`;

  

  async function generateNextCity() {
    citiesOutput.textContent = `Nice guess! I am thinking of another city...`;
    setTimeout(() => {
      let nextCity = validCities.filter(city => {
        let cityFirstLetter = city[0];
        let lastCityUsed = usedCities[usedCities.length-1];
        let lastLetterToMatch = lastCityUsed[lastCityUsed.length-1];
        return !isInUsedCities(city) && isInValidCities(city) && cityFirstLetter === lastLetterToMatch
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
function isInValidCities(input){
  return validCities.some(elem => elem === input);
}

function isInUsedCities(input) {
  return usedCities.some(elem => elem === input);
}

function addToUsedCities(input) {
  usedCities.push(input);
}

function firstLetterMatchesRight(input) {
  let inputFirstLetter = input[0]
  let lastCityUsed = usedCities[usedCities.length-1];
  let lastLetterToMatch = lastCityUsed[lastCityUsed.length-1]
  return inputFirstLetter === lastLetterToMatch;
}
// cities helper functions end

// cities section end


// to-Do list sectiond

const toDoInput = document.getElementById(`toDo-input`);
const toDoButtonAdd = document.getElementById(`toDo-button`);
const toDoList = document.querySelector(`.toDo-list`);


toDoInput.addEventListener(`keypress`, (e) => {
  if (e.key === "Enter"){
    addListItem();
  }
})

toDoButtonAdd.addEventListener(`click`, addListItem)

function addListItem() {
  if (!toDoInput.value) {
    return
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

    textToChangeInput.addEventListener(`change`, handleChange)
    textToChangeInput.addEventListener(`blur`, handleChange)

    function handleChange() {
      if (!textToChangeInput.value) {
        newListItem.remove();
      }

      textToChange.textContent = textToChangeInput.value;
      textToChangeInput.remove();
      textToChange.addEventListener(`dblclick`, changeContent);
    }

    newListItem.insertAdjacentElement(`beforeEnd`, textToChangeInput)



  })

      // text-change functionality section end



      // "done" functionality section

      let toggleDoneButton = document.createElement(`button`);
      toggleDoneButton.classList.add(`toggleDoneButton`);

      toggleDoneButton.addEventListener(`click`, () => {
        toggleDoneButton.classList.toggle(`done`);
        textToChange.classList.toggle(`completed`);
      })

      newListItem.insertAdjacentElement(`afterbegin`, toggleDoneButton);

      // "done" functionality section end

      // "remove" functionality section

      let removeButton = document.createElement(`button`);
      removeButton.classList.add(`toDo-removeButton`);

      removeButton.addEventListener(`click`, () => {
        newListItem.remove();
      })

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
  let inputs = [entityName, entityPrice, entityAmount]

  for (let input of inputs) {
    if (!input.value) {
      input.focus();
      return
    }
  }

  let newRow = document.createElement(`tr`);

  let name = entityName.value;
  let price = entityPrice.value;
  let amount = entityAmount.value;

  let nameElement = document.createElement(`td`);
  nameElement.textContent = name;
  nameElement.addEventListener(`dblclick`, redactElement)

  let priceElement = document.createElement(`td`);
  priceElement.textContent = price;
  priceElement.classList.add(`price`);
  priceElement.addEventListener(`dblclick`, redactElement)


  let amountElement = document.createElement(`td`);
  amountElement.textContent = amount;
  amountElement.classList.add(`amount`);
  amountElement.addEventListener(`dblclick`, redactElement)
  
  let sumElement = document.createElement(`td`);
  sumElement.textContent = price * amount;
  sumElement.classList.add(`sum`);
  let deleteElement = document.createElement(`td`);
  deleteElement.textContent = `Delete`;
  deleteElement.addEventListener(`click`, () => {
    newRow.remove();
    updateTotal()
  })

  newRow.appendChild(nameElement);
  newRow.appendChild(priceElement);
  newRow.appendChild(amountElement);
  newRow.appendChild(sumElement);
  newRow.appendChild(deleteElement);

  tableBody.appendChild(newRow);

  updateTotal()

  // update total
  function updateTotal() {
    let sums = Array.from(tableBody.querySelectorAll(`.sum`))
    let price = Array.from(tableBody.querySelectorAll(`.price`))
    let amount = Array.from(tableBody.querySelectorAll(`.amount`))
    let total = 0;

    for (let i = 0; i < price.length; i++) {
      sums[i].textContent = price[i].textContent * amount[i].textContent; 
      total += +sums[i].textContent
      console.log(sums[i]);
      console.log(price[i]);
      console.log(amount[i]);
      console.log(total);
    }
    tableTotal.textContent = `Total: ${total}$`
  }

  // redacting td

  function redactElement() {
    
    this.classList.add(`activeTD`)
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
    if (e.key === `Enter`){
      
      self.classList.remove(`activeTD`)
      updateContent();
    }
  }); 

  redactInput.addEventListener(`blur`, () => {
    
    self.classList.remove(`activeTD`)
      updateContent();
  });
}
}



// calculator-table section end


// helper functions

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
