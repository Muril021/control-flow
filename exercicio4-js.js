const firstNText=prompt('Digite o primeiro número: ');
const firstNumber=Number(firstNText);
const secondNText=prompt('Digite o segundo número: ');
const secondNumber=Number(secondNText);
const thirdNText=prompt('Digite o terceiro número: ');
const thirdNumber=Number(thirdNText);
let r, s, total

r = Math.pow((firstNumber + secondNumber), 2.0);
s = Math.pow((secondNumber + thirdNumber), 2.0);
total = ((r+s)/2);

document.write(`Total: ${Math.floor(total)}`);