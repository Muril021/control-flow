const firstNText=prompt('Digite a primeira nota: ');
const firstNote=Number(firstNText);
const secondNText=prompt('Digite a segunda nota: ');
const secondNote=Number(secondNText);
const thirdNText=prompt('Digite a terceira nota: ');
const thirdNote=Number(thirdNText);

let firstNoteP, secondNoteP, thirdNoteP, media

firstNoteP = firstNote*2;
secondNoteP = secondNote*3;
thirdNoteP = thirdNote*5;
media = (firstNoteP+secondNoteP+thirdNoteP)/10;

document.write(`Média: ${Math.floor(media)}`);