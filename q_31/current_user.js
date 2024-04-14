"use strict";
let currentUser = ['Jhon', 'Tom', 'Hautun', 'Nightangle', 'Mark'];
let newUser = ['Saad', 'Jhon', 'asad', 'Tom', 'Hadi'];
newUser.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user name ${newUsername} is not available.please write a valid user name.`);
    }
    else {
        console.log(` The user name :${newUsername} available.`);
    }
});
