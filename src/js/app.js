import Daemon from './Daemon';
import Magician from './Magician';

// const deamon1 = new Daemon('Олег');
// deamon1.setStoned();
// deamon1.setAttack(2);
// console.log(deamon1.getAttack());

const magician1 = new Magician('Виктор');
// magician1.setStoned();
magician1.setAttack(1);
console.log(magician1);

// Функция корректно считает атаку с учетом легенды
// Встроить метод в класс Character
// function setAttack(attack, x) {
//     let resultAttack = attack;
//     if (x > 1) {
//         resultAttack = attack - (attack * ((x-1)/10));
//     }
//     return resultAttack;
// }

// function setStoned(attack, x) {
//     return Math.round(attack - Math.log2(x) * 5);
// }

// const attack = setAttack(100, 2);
// console.log(setStoned(attack, 2));
