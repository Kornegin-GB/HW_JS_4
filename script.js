// Задание 1
const isEven = (number) => {
   if (number === 0) {
      return `${number} – это ноль`;
   } else if (number % 2 === 0) {
      return `${number} – четное число`;
   } else {
      return `${number} – нечетное число`;
   }
}
for (let i = 0; i <= 10; i++) {
   console.log(isEven(i));
}
// Задание 2
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);
// Задание 3
const myArray = [];
const numberGenerator = () => Math.ceil(Math.random() * (9 - 1) + 1);
for (let i = 0; i < 5; i++) {
   myArray[i] = numberGenerator();
}
console.log(myArray);
// 1
let sum = 0;
myArray.forEach(x => sum += x);
console.log(sum);
// 2
const minNumber = Math.min(...myArray);
console.log(minNumber);
// 3
let numberSerch = 3;
const isSerch = myArray.includes(numberSerch);
console.log((isSerch) ? `Число ${numberSerch} в заданном массиве присутствует` : `Число ${numberSerch} в заданном массиве отсутствует`);
// Задание 4
let line = '';
for(let i = 0; i < 20; i++){
   line += 'x';
   console.log(line);
}