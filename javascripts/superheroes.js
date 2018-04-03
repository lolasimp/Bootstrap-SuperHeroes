const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}


const buildDomString = (theArray) => {
    let domString = "";
    theArray.forEach((superheroes) => {
        // domString += `<div class="hero">`;
        // // domString +=`<h2>${superheroes.name}</h2>`;
        // domString += `</div>`;
        domString += `<div class="col-sm-3">`;
        domString += `<div class="panel">`;
        domString +=    `<div class="panel-heading">`;
        domString +=      `<h3 class="panel-title">${superheroes.name}</h3>`;
        domString += `</div>`;
        domString +=    `<div class="panel-body">`;
        domString +=      `<img class="charImage" src="${superheroes.image}">`;
        domString +=      `<p class="charDescription">${superheroes.description}<p>`;
        domString +=     `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    printToDom(domString, "all-hero");
};

function executeThisCodeAfterLoaded(){
    const data = JSON.parse(this.responseText);
    buildDomString(data.superheroes);
}

function executeThisCodeifXHRFails(){
    console.log("NOPE!!!");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterLoaded);
    myRequest.addEventListener('error', executeThisCodeifXHRFails);
    myRequest.open("GET", "../db/superhoes.json");
    myRequest.send();

}

startApplication();