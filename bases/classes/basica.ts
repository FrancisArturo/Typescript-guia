(() => {

    class Avenger {

        // private name: string;
        // private team : string;
        // public realName?: string;
        static avgAge: number = 35;


        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string
        ) {}

        public bio () {
            return `${this.name} (${this.team})`
        }   

    }
    
    const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');
    console.log(antman.bio());
})()