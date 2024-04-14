let guestList:string[] =['Safdar','Sarfaraz','Nouman'];

// for(let i=0; i<guestList.length; i++){

// console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );

// }

let absent_guest:string ='Safdar';

let new_guest:string = 'Abdul qadir';
guestList[0] = new_guest ;

for(let i=0; i<guestList.length; i++){

    console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );
    
    }
    console.log(`Mr, ${absent_guest}  is not coming to the party`);
    console.log('Good news we found a big table so we are inviting 3 more guest.');
    guestList.unshift('Daniyal nagori');//sub se pehle index se change hoga
    guestList.splice(2,0,'Ameen alam');//middle index me change hoga
    guestList.push('Mohammad bilal khan');//sub se end wale index me ayega

    for(let i=0; i<guestList.length; i++){

        console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );
        
        }
    

    
    