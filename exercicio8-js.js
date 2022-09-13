const cfText=prompt('Digite o custo de fábrica: ');
const cf=Number(cfText);
let cc 

cc = (0.28*cf) + (0.45*cf) + cf;

document.write(`O custo ao consumidor é de ${cc}`);