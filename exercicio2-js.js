const totalText=prompt('Digite seu total de dias de vida: ');
const total=Number(totalText);
let year, month, day

year=total/365;
month=(total%365)/30;
day=(total%365)%30;

document.write(`Você viveu ${Math.floor(year)} ano(s), ${Math.floor(month)} mes(es) e ${Math.floor(day)} dia(s).`);
