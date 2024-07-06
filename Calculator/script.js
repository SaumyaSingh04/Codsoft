let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    if (number === 0 && currentInput === '0') return; // Prevent multiple leading zeros
    if (currentInput === '0' && number !== '.') {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && op !== '.') return;
    if (op === '.' && currentInput.includes('.')) return;
    if (currentInput === '' && op === '.') {
        currentInput = '0.';
        updateDisplay();
        return;
    }
    if (operator !== '') {
        calculate();
    }
    operator = op;
    currentInput += ' ' + op + ' ';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput === '' ? '0' : currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.trim().slice(0, -1).trim();
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    let result;
    const parts = currentInput.split(' ');
    if (parts.length !== 3) return;
    const prev = parseFloat(parts[0]);
    const current = parseFloat(parts[2]);
    const op = parts[1];
    if (isNaN(prev) || isNaN(current)) return;
    switch (op) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
