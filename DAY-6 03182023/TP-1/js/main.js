/*
let arr = new Array()
undefined
let arr2 = []
undefined
let arr3 = [15,12,13,19,16,17,8,9,5,3]
undefined
arr3.push(19)
11
arr3
(11) [15, 12, 13, 19, 16, 17, 8, 9, 5, 3, 19]
arr3.shift()
15
arr3
(10) [12, 13, 19, 16, 17, 8, 9, 5, 3, 19]
arr3.pop()
19
arr3
(9) [12, 13, 19, 16, 17, 8, 9, 5, 3]
arr3.splice(1,2)
(2) [13, 19]
arr3
(7) [12, 16, 17, 8, 9, 5, 3]
arr3.concat()
(7) [12, 16, 17, 8, 9, 5, 3]
const demo ="ab#cd#ef#gh#tz#demo"
undefined
demo
'ab#cd#ef#gh#tz#demo'
demo.split("#")
(6) ['ab', 'cd', 'ef', 'gh', 'tz', 'demo']
*/



/*************************************************************** */

const noteElement = document.getElementById("note");
const resultElement = document.getElementById("result");
const listNotes = document.getElementById("list-notes");

var notes = [];
    


function showNotes(){
    let blocHTML = '';

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        
        const tmp = '<li>'+note+'</li>';

        blocHTML = blocHTML + tmp;
    }


    listNotes.innerHTML = blocHTML;
}


function ajouter(){
    
    if (noteElement.value != '') {

        const note = Number(noteElement.value); 
        notes.push(note); 

        noteElement.value='';

        showNotes();

    }
}




function calculer(){
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme+= notes[i]; 
    }

    const moy = (somme / notes.length);

    resultElement.innerHTML='Moy = '+moy;

}