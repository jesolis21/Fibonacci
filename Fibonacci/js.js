function calculateFibonacci() {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');

    if (isNaN(userInput) || userInput === '') {
        resultElement.textContent = 'Por favor, ingrese un número válido.';
        return;
    }

    const number = parseInt(userInput);
    if (number <= 0) {
        resultElement.textContent = 'Por favor, ingrese un número mayor que cero.';
        return;
    }

    const fibonacciSeries = generateFibonacciSeries(number);

    resultElement.textContent = 'Serie de Fibonacci: ' + fibonacciSeries.join(', ');
}

function generateFibonacciSeries(n) {
    const series = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            series.push(i);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    return series;
}