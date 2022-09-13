const totalText=prompt('Digite o total de segundos de duração do evento: ');
const total=Number(totalText);
let hour, minute, second;

hour=total/3600;
minute=(total%3600)/60;
second=(total%3600)%60;

document.write(`O evento durou ${Math.floor(hour)} hora(s), ${Math.floor(minute)} minuto(s) e ${Math.floor(second)} segundo(s).`);