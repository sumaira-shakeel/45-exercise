"use strict";
let magician = ['Harry porter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore '];
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magician[i] = 'The great ' + magiciansArray[i];
    }
}
make_great(magician);
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
