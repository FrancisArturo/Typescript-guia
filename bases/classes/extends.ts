(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('constructor avenger llamado');
        }
        
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name:string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            console.log('constructor x-men llamado');
            
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if(name.length < 3) {
                throw new Error('Debe tener mas de 3 letras');
            }
            this.name = name;
        }

        getFullNameXmen() {
            console.log(super.getFullName());
            
        }
    }

    const wolwerine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolwerine);

    // wolwerine.getFullNameXmen();

    wolwerine.fullName = 'John';

    console.log(wolwerine.fullName);
})()