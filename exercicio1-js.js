const yearText=prompt('Digite quantos anos você viveu: ');
const year=Number(yearText);
const monthText=prompt('Digite quantos meses você viveu: ');
const month=Number(monthText);
const dayText=prompt('Digite quantos dias você viveu: ');
const day=Number(dayText);
let total

total = (year*365) + (month*30) + (day);

document.write(`Você viveu ${total} dias.`);