
const history = [];


function clearDisplay() {
    document.getElementById('display').value = '';
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const result = eval(expression); 
        display.value = result;
        addToHistory(`${expression} = ${result}`); 
    } catch (error) {
        display.value = 'ERREUR'; 
    }
}


function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}


function updateHistoryDisplay() {
    const historyBox = document.getElementById('historyBox');
    historyBox.value = history.join('\n');
}


function clearHistory() {
    history.length = 0; 
    updateHistoryDisplay();
}


document.addEventListener('keydown', event => {
    const key = event.key;
    const display = document.getElementById('display');

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '(', ')', '.', '%'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault(); 
        calculate(); 
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay(); 
    }
});
