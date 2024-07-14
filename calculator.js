//addition
function add(number1, number2) {
    return number1 + number2;         
}
//subtraction
function substract(number1, number2) {
    return number1 - number2;         
}
//multiplication
function multiply(number1, number2) {
    return number1 * number2;                     
}
//division
function divide(number1, number2) {
    return number1 / number2;          
}
//event-listners for addition
document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
//event-listners for substraction
document.getElementById("subtract").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = substract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
//event-listners for multiplication
document.getElementById("multiply").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
//event-listners for division
document.getElementById("divide").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});