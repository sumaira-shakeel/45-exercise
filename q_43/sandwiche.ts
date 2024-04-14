
function makeSandwich(item:string[]){
    console.log('Make your sandwich with:');
    item.forEach(element=> console.log('- ' +element));
    console.log('Enjoy your sandwich\n');
}
makeSandwich(['Ham','Cheese','peanut butter']);
makeSandwich(['Butter','Jam Jelly']);
makeSandwich(['chicken','Eggs' ,'Ham']);