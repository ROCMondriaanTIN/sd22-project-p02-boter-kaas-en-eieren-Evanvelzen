console.log('main.js loaded');

//explain explanation of tules of the game 
alert('welkom bij Boter, Kaas en Eieren');

alert(`het doel is simpel.

Probeer als eerste 3 op een rij te krijgen.`);

alert('bij dit spel begint speler 1')

alert('Speler 1 gebruikt  kruisjes');

alert('speler 2 gebruikt cirkels');

//players asked to fill in a name
const player1Name = prompt('Wat is de naam van speler 1?');

const player2Name = prompt('wat is de naam van speler 2?');

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];



const boxes = document.querySelectorAll('.box');
const info = document.querySelector('.info');

let stopping = false;
let toggle = false;

info.innerHTML = `beurt: ${player1Name}`


boxes.forEach(box => {
    box.addEventListener('click', function (e) {
        if (stopping) {
            return;
        } //ensures you cant keep clicking after the tile is filled in

        if (box.textContent != "") {
            console.log("box.tile reageerd niet. waarschijnlijk is dit vakje al ingevult");

            return
        }
        console.log('box.tile reageerd: ', e.target);

        //responsible for switching between player 1 and player 2
        if (toggle) {
            e.target.textContent = "O";
            info.innerHTML = (`beurt: ${player1Name}`)
            
        } else {
            e.target.textContent = "X";
            info.innerHTML = (`beurt: ${player2Name}`)
                ;
        }

        toggle = !toggle;

        checkForWin();
    });
})


function checkForWin() {
    for (let i = 0; i < winningCombination.length; i++) {
        const row = winningCombination[i];
        //here are the combinations enter
        const position_a = row[0];
        const position_b = row[1];
        const position_c = row[2];

        const box_a = boxes[position_a];
        const box_b = boxes[position_b];
        const box_c = boxes[position_c];

        //here is checked is there is a winning combination
        if (box_a.textContent == "" || box_b.textContent == "" || box_c.textContent == "") { 
            continue;
        }

        //in case of winning combination it will choose the winning player with the else if statement
        else if (box_a.textContent == box_b.textContent && box_b.textContent == box_c.textContent && box_c.textContent == "X") {
            console.log(`Winnende Situatie`);
            alert(`Spel gewonnen door ${player1Name}`);
            window.location.href = "index.html"
            stopping = true;
        } 
        
        else if(box_a.textContent == box_b.textContent && box_b.textContent == box_c.textContent && box_c.textContent == "O") {
            console.log(`Winnende Situatie`);
            alert(`Spel gewonnen door ${player2Name}`);
            window.location.href = "index.html"
            stopping = true;
        }
    }
}