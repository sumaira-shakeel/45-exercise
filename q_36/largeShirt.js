"use strict";
// by default parameters.
function make_shirt(size = 'Large', text = 'I love typescript') {
    console.log(`Creating a ${size} shirt  with the message: ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I also love python');
