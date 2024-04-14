function storeCarInfo(manufacturer:string,modelName:string, ...extraOption:{ [key: string]: any } []):
 Object{
    
        const carInfo = {
            manufacturer,
            modelName,
            ...Object.assign({},...extraOption)
        }

        return carInfo;
    };
     let answer = storeCarInfo('Honda','Civic', {color:'black'} , {features:['Navigation','power window']});
     console.log(answer);
