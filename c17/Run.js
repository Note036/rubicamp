import Calculator, {PI} from "./Calculator.js"

const calc = new Calculator();

calc.add(10).substract(5).result();
calc.add(3).multiply(4).devide(6).result();
calc.x = 7;
console.log(`nilai sekarang : ${calc.x}`);
calc.multiply(2).multiply(PI).result();
calc.x = 7;
calc.squere().multiply(PI).result();
calc.x = 4;
calc.exponent(3).result();
calc.squereRoot().result();