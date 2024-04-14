"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userName = ['Admin', 'Tom', 'Erick', 'Merk', 'Jack'];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'Admin') {
        console.log('Hello Admin: would you like to see a status report.');
    }
    else {
        console.log(`Hello ${userName[i]}: thanking you for login in again.`);
    }
}
