(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }

    class Villain extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolwerine= new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');

    // console.log(wolwerine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    
    const printName =(character: Mutant) =>{
        console.log(character.realName);
    }

    printName(wolwerine);
})()