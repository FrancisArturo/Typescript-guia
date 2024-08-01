import { getPokemon } from "./generics/getPokemons";



getPokemon(14)
    .then( pokemon => console.log(pokemon.sprites.front_default))
    .catch( error => console.error(error))
    .finally( () => console.log('Fin de getPokemon'))
    
