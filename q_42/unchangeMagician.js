"use strict";
let magician = ['Harry porter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore '];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = 'The great ' + magiciansArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log(' This is my orignal array.');
show_magicians(magician);
console.log('\nThis is my modify copy of my array.\n');
show_magicians(copyMagicianArray);
