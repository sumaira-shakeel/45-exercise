"use strict";
//equality and unequality test,
console.log("equality test with string", "Apple" === "Apple");
//unequality test ,
console.log("unequality test with string ", "orange" != "pear");
//test using the lower case function.
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
//equality and unequality test in numbers.
console.log("Equality test with number:", 56 === 56);
//unequality test.
console.log("Inquality test with number:", 29 !== 45);
//greater then or less than.
console.log("Greater than test:", 20 > 10);
//less than test.
console.log("Less than test:", 5 < 10);
//greater than and equal to test.
console.log("Greater than and equal to test:", 30 >= 30);
//less than and equal to test,
console.log("less than or equal to test:", 5 <= 10);
//test using and or operators.
console.log("And operator test: ", 5 <= 10 && 5 === 5);
//test using or opertor.
console.log("And operator test: ", 5 <= 10 || 5 === 5);
//test whearther items is in array
let Anarray = ['Apple', 'Pear', 'Kiwwi'];
console.log("Test 'Apple' in the array: ", Anarray.includes("Apple")); // include is using for checked the items preasent in the list.
//test whearther items is not  in array
console.log("Testing 'Orange' is not in array: ", !Anarray.includes("Orange"));
