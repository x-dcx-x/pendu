let tabMots = ["chaine", "marqueur", "clavier", "verre", "cadre"];

let afficheLettre = document.getElementById("afficherLettre");

let mot = document.getElementById('word');
let submit = document.getElementById('submit');
let addLetters = document.getElementById('addLetter');

let tabUsed = [];
let letterUsed = [];

let random = tabMots[Math.floor(Math.random() * tabMots.length)];

let point = 10;


function nombreLettre () {
    for (let i = 0; i < random.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = " _ ";
        mot.appendChild(span);
        letterUsed.push(span);
        //push the word in the mystery word
        tabUsed.push(random[i].toLowerCase());
    }
}
nombreLettre();

// check if the lettre is present into the word
submit.addEventListener('click', function () {
    let value = addLetters.value.toLowerCase();

    if (tabUsed.includes(value)) {
        while (tabUsed.indexOf(value) !== -1) {
            let index = tabUsed.indexOf(value);
            tabUsed[index] = "_";
            letterUsed[index].innerHTML = value;
        }
    }
    addLetters.value = "";
    victoryCondition();
});

function victoryCondition() {
    if (letterUsed !== tabUsed) {
        point--;
        document.getElementById('point').innerHTML = point.toString();
    }
    if (point === 0) {
        alert("Vous avez perdu, le mot est " + random);
        window.location.reload();
    }
    else if (tabUsed.toString().length === random.length) {
        alert('Vous avez trouvé le mot !');
        window.location.reload();
    }
}

document.addEventListener("keydown", (event) => {
    afficheLettre.innerHTML += String.fromCharCode(event.keyCode).toLowerCase();
});

console.log(random)