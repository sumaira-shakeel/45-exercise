"use strict";
function citties(city, country = 'Default country.') {
    console.log(`${city} is in ${country}`);
}
citties('karachi', 'pakistan');
citties('Tokyo', 'Japan');
citties('paris');
