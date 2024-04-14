"use strict";
let guestList = ['Safdar', 'Sarfaraz', 'Nouman'];
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n');
}
let absent_guest = 'Safdar';
let new_guest = 'Abdul qadir';
guestList[0] = new_guest;
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n');
}
console.log(`Mr, ${absent_guest}  is not coming to the party`);
