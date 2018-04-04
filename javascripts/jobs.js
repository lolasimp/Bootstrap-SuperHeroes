let selectedHero = "";


const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}


const buildDomString = (theArray) => {
    let domString = "";
    theArray.forEach((superheroes) => {
        domString += `<li>`;
        domString += `<a class="name-hero" href="#" data-hero-id="${superheroes.id}"> ${superheroes.name}</a>`;
        domString += `</li>`;
    })
    printToDom(domString, "awesome-dropdown");
};

const selectHero = (e) => {
    selectedHero = e.target.dataset.heroId;
    document.getElementById('awesome-button').classList.add('hide');
    genericHeroRequest(loadFileforSingleHero);
}

const addheroSelectionEventListeners = () => {
    const selectedHero = document.getElementsByClassName("name-hero");
    for (let i = 0; i<selectedHero.length; i++){
    selectedHero[i].addEventListener('click', selectHero)
      }
    };

    const displaySuperhero = (heroes) => {
        let domString = "";
        heroes.forEach((superheroes) => {
          if (superheroes.id === selectedHero) {
            domString += `<div class="row">`;
            domString += `<div class="col-sm-4">`;
            if (superheroes.gender === "Male") {
              domString += `<img class="charImage maleImage" src="${
                superheroes.image
              }">`;
            } else {
              domString += `<img class="charImage femaleImage" src="${
                superheroes.image
              }">`;
            }
            domString += `</div>`;
            domString += `<div class="col-sm-6">`;
            domString += `<h2>Selected Hero: ${superheroes.name}</h2>`;
            domString +=     `<p class='charDescription'>${superheroes.description}</p>`;
            domString += `</div>`;
          }
        });
        printToDom(domString, "selected-hero");
      };


function loadFileforSingleHero(){
    const data = JSON.parse(this.responseText);
    displaySuperhero(data.superheroes);
}

function executeThisCodeAfterLoaded(){
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
    addheroSelectionEventListeners();
}

function executeThisCodeifXHRFails(){
    console.log("NOPE!!!");
}
const genericHeroRequest = (successFunction) => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', successFunction);
    myRequest.addEventListener('error', executeThisCodeifXHRFails);
    myRequest.open("GET", "../db/superhoes.json");
    myRequest.send();
};

const startApplication = () => {
    genericHeroRequest(executeThisCodeAfterLoaded);

};

startApplication();