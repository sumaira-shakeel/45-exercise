let currentUser:string[] = ['Jhon','Tom','Hautun','Nightangle','Mark'];

let newUser:string[] = ['Saad','Jhon','asad','Tom','Hadi'];

newUser.forEach(newUsername => {
    let lowerCase:string = newUsername.toLowerCase();
    if(currentUser.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The user name ${newUsername} is not available.please write a valid user name.`);

    }else{
        console.log(` The user name :${newUsername} available.`);
    }
})

