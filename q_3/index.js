"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
let lower_case = personName.toLowerCase();
let upper_case = personName.toUpperCase();
let title_case = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName},  Here ara your name in :

LowerCase : ${lower_case}

UpperCase : ${upper_case}

TitleCase : ${title_case}

`);
}
else {
    alert(`please fill your name!`);
}
