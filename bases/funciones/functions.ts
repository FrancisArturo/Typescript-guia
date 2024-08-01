

(() => {


    const hero:string = 'Flash';

    function returnName () : string {
        return hero;
    } 

    const activeSignal = ():string => {
        return 'señal activada'
    }

    const heroName = returnName();
    
})()