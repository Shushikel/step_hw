let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

let plus = parseInt(num1) + parseInt(num2);
let minus = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;
let deg1 = num1 ** 2;
let deg2 = num2 ** 2;

console.log(parseInt(num1) + '+' + parseInt(num2) + '=' + plus);
console.log(num1 + '-' + num2 + '=' + minus);
console.log(num1 + '*' + num2 + '=' + mult);
console.log(num1 + '/' + num2 + '=' + div);
console.log(num1 + ' % ' + num2 + '=' + rem);
console.log(num1 + ' **2' + '=' + deg1);
console.log(num2 + ' **2' + '=' + deg2);