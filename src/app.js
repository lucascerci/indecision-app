//import './utils.js'
import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log('app is runing');

console.log('=============================');
// console.log(square(4));
// console.log(add(100,23));
// console.log(subtract(100, 81));

console.log('É adulto? -' + isAdult(18));
console.log('JA PODE BEBER? -' +canDrink(18));
console.log('É VELHO? -'+ isSenior(65));
