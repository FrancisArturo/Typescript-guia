(() => {


    const fullName = (firstName:string, lastName:string):string => {
        
        return `${firstName} ${lastName}`;
    }

    // const name = fullName('Tony', true);

    let noName: any;

    const name = fullName('Tony', noName);

    console.log(name);
    

})()