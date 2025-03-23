// Fungsi untuk menghitung deret Fibonacci
const fibonacci = (n) => {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.slice(0, n);
};

const generateFibonacci = () => {
    let num = document.getElementById("num").value;
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {
        document.getElementById("fibonacciResult").innerText = "Masukkan angka yang valid!";
        return;
    }
    document.getElementById("fibonacciResult").innerText = "Deret Fibonacci: " + fibonacci(num).join(", ");
};

// Kalkulator dengan arrow function & spread operator
const calculator = (operator, num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) return "Masukkan angka yang valid!";
    
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error: Bagi 0"; // Tidak pakai .toFixed(2)
        case '%': return num2 !== 0 ? num1 % num2 : "Error: Bagi 0";
        default: return 'Operator tidak valid';
    }
};

const calculate = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcResult").innerText = "Masukkan angka yang valid!";
        return;
    }

    let result = calculator(operator, num1, num2);
    document.getElementById("calcResult").innerText = `Hasil: ${result}`;
};
