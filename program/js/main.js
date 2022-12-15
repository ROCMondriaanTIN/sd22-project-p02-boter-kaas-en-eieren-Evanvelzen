// console.log('main.js loaded');

// alert('welkom bij Boter, Kaas en Eieren');

// alert(`het doel is simpel.

// Probeer als eerste 3 op een rij te krijgen.`);

// alert('bij dit spel begint speler 1')

// alert('Speler 1 gebruikt  kruisjes');

// alert('En speler 2 gebruikt cirkels');

// const player1name = prompt('Wat is de naam van speler 1?');

// const player2name = prompt('wat is de naam van speler 2?');

const winningcombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];



const boxes = document.querySelectorAll('.box');
const info = document.querySelector('.info');

let stopping = false;
let toggle = false;

boxes.forEach(box => {
    box.addEventListener('click', function (e) {
        if(stopping){
            return;
        } //zorgt ervoor dat je niet kan blijven clicken

        if (box.textContent != "") {
            console.log("box.tile reageerd niet");
    
            return
        }
        console.log('box.tile reageerd: ', e.target);
        if (toggle) {
            e.target.textContent = "O";
            info.innerHTML=('beurt: speler 1')

        } else {
            e.target.textContent = "X";
            info.innerHTML=('beurt: speler 2')
;        }

        toggle = !toggle;

        checkForWin();
    });
})

  
function checkForWin(){
    for(let i = 0; i < winningcombination.length; i++) {
      const row = winningcombination[i];

        const position_a = row[0];
        const position_b = row[1];
        const position_c = row[2]; 

        const box_a = boxes[position_a];
        const box_b = boxes[position_b];
        const box_c = boxes[position_c];


        if(box_a.textContent == "" || box_b.textContent == "" || box_c.textContent == "") {
            continue;
        }


        else if(box_a.textContent == box_b.textContent && box_b.textContent == box_c.textContent) {
            console.log("Winnede situatie");
            alert("gefeliciteerd");
            
            // window.location.href = "index.html";
             stopping = true
        } else{
            console.log("gelijk spel");
        }
    }
}