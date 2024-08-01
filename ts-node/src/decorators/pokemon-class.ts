
function printToConsole(constructor: Function) {
    console.log(constructor);
    
}

const printConditional = ( print: boolean = false):Function => {
    if(print) {
        return printToConsole;
    } else {
        return () => {};
    }
}


const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = (id:number) => {
            if(id < 1 ||id > 800) {
                return console.error('El id no es válido');
            } else {
                return originalMethod(id);
            }
        }
    }
}

function readonly( isWritable: boolean = true): Function {

    return function(target: any, propertyKey: string){

        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this);
                return 'John';
            },
            set(this, val){
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor
    }
}


@blockPrototype
@printConditional(false)
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.com'

    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonToDb (id: number) {
        console.log(`Pokemon id:${id} guardado en DB`);
    }
}