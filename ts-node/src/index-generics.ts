import { genericFunction } from "./generics/generics";
import { printObject } from "./generics/generics";


printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1,2,3,4,5,6,7,8,9,10]);
printObject('Hola Mundo');


console.log(genericFunction(3.1415).toFixed(2));
console.log(genericFunction('Hola Mundo').toUpperCase());
console.log(genericFunction(new Date()).toLocaleTimeString());




