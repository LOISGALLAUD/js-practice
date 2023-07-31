/*
Loïs GALLAUD
Calculator application
*/

const Calculator = {
        // Addition
        addition(a, b) {
            return a + b;
        },

        // Substraction
        substraction(a, b) {
            return a - b;
        },

        // Multiplication
        multiplication(a, b) {
            return a * b;
        },

        // Division
        division(a, b) {
            return a / b;
        },

        // Exponentiation
        exponentiation(a, b) {
            return a ** b;
        },

        // Modulo   
        modulo(a, b) {
            return a % b;
        },

        // Square root
        squareRoot(a) {
            return Math.sqrt(a);
        },

        // Absolute value   
        absoluteValue(a) {
            return Math.abs(a);
        },

        // Round to the closest integer 
        round(a) {
            return Math.round(a);
        },
}

let calc = Calculator;
console.log(calc.addition(1, 2));