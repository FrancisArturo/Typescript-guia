import { genericFunction } from "./generics/generics";
import { Hero, Villain } from "./interfaces";




const deadpool = {
    name: 'Deadpool',
    realName: 'Wade',
    dangerLevel: 130
}

console.log(genericFunction<Villain>(deadpool).dangerLevel);