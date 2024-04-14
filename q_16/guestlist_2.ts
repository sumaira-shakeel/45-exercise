let guestList:string[] =['Safdar','Sarfaraz','Nouman'];
// for(let i=0; i<guestList.length; i++){
// console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );
// }
let absent_guest:string ='Safdar';
let new_guest:string = 'Abdul qadir';
guestList[0] = new_guest ;
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );
//     }
    console.log(`Mr, ${absent_guest}  is not coming to the party`);
    console.log('Good news we found a big table so we are inviting 3 more guest.');
    //array me 3 guest add kie by 3 differnt method.
    guestList.unshift('Daniyal nagori');//sub se pehle index se change hoga
    guestList.splice(2,0,'Ameen alam');//middle index me change hoga
    guestList.push('Mohammad bilal khan');//sub se end wale index me ayega

//i have print 6 guest here which are present in the array.
    for(let i=0; i<guestList.length; i++){

        console.log('Dear Mr : ' + guestList[i] + ',\n It is our pleasure to invite you in our dinner party. \nThank you!\n' );
    }
    //appologise to guestfor not inviting.
    console.log(`\nsorry we can not arrange abig table , only two people will be invited.`);
    //yahan pe me ne guest remove kiye hen
    while(guestList.length > 2 ){
       let remove_guest =  guestList.pop()// pop is used to remove guest from the last of array,and also save the name of removing items
       console.log(`sorry Mr ${remove_guest}, you are not invited for dinner.`);
    }
    // hamary bache hue 2 invited guest.
    for(let i=0; i<guestList.length; i++){

        console.log('Dear Mr : ' + guestList[i] + ',\n you are still invited. \nThank you!\n' );
    }
    //me ne saary guest array se remove kr diye.
    guestList.splice(0,2);
    console.log(guestList);

