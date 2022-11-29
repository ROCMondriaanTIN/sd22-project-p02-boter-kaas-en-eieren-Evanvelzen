console.log('main.js loaded');

alert('welkom bij Boter, Kaas en Eieren');

alert(`het doel is simpel.

Probeer als eerste 3 op een rij te krijgen.`);

alert('bij dit spel begint speler 1')

alert('Speler 1 gebruikt  kruisjes');

alert('En speler 2 gebruikt cirkels');

const player1name = prompt('Wat is de naam van speler 1?');

confirm(`Weet u zeker dat uw naam: ${player1name} is?`);

const player2name = prompt('wat is de naam van speler 2?');

confirm(`Weet u zeker dat uw naam: ${player2name} is?`);

const winstcombinatie = [[0, 1, 2], [3, 4, 5], [6, 7, 8][0, 3, 6], [1, 4, 7][2, 5, 8], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const boxes = document.querySelectorAll('.box');

let toggle = false;

boxes.forEach(box => {
    box.addEventListener('click', function (e) {
        if (box.textContent != "") {
            console.log("box.tile reageerd niet");
            return
        }
        console.log('box.tile reageerd: ', e.target);
        if (toggle) {
            e.target.textContent = "O";
        } else {
            e.target.textContent = "X"
        }

        toggle = !toggle
    });
})