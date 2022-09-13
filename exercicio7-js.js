const prompt=require('prompt-sync')();
const frtnText=prompt('Digite o primeiro coeficiente: ');
const frtn=Number(frtnText);
const secnText=prompt('Digite o segundo coeficiente: ');
const secn=Number(secnText);
const thdnText=prompt('Digite o terceiro coeficiente: ');
const thdn=Number(thdnText);
const frthnText=prompt('Digite o quarto coeficiente: ');
const frthn=Number(frthnText);
const ffthnText=prompt('Digite o quinto coeficiente: ');
const ffthn=Number(ffthnText);
const sxthnText=prompt('Digite o sexto coeficiente: ');
const sxthn=Number(sxthnText);

let valx = (thdn*ffthn - secn*sxthn)/(frtn*ffthn - secn*frthn);
let valy = (frtn*sxthn - thdn*frthn)/(frtn*ffthn - secn*frthn);

console.log(`O valor de "x" é ${valx}`);
console.log(`O valor de "y" é ${valy}`);