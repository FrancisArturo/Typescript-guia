import { Pokemon } from "./decorators/pokemon-class";



const charmander = new Pokemon('Charmander');

// (Pokemon as any).customName = 'Pikachu';

charmander.savePokemonToDb(50);

charmander.publicApi = 'hola'

console.log(charmander)
