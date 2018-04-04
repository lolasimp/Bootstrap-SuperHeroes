const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
}


const buildDomString = (theArray) => {
    let domString = "";
    theArray.forEach((superheroes) => {
        domString += `<li>`;
        domString += `<a href="#" data-hero-id="${superheroes.id}"> ${superheroes.name}</a>`;
        domString += `</li>`;
    })
    printToDom(domString, "awesome-dropdown");
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