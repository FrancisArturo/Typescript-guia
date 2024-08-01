(() => {

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers:Avenger = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 1500.123345345
    }

    // const { vision, power} = avengers;

    const printAvenger = ({ironman, ...resto}:Avenger) => {
        console.log(ironman, resto);
    }

    printAvenger(avengers); 


    const avengerArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [, ironman, ] = avengerArr;

    console.log(ironman);
    
})()