const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if(0 || 1) {
    console.log('players win')
}else if(0 || 2) {
    console.log('computer win')
}else if(1 || 0) {
    console.log('players win')
}else if(1 || 2) {
    console.log('computer win')
}else if(2 || 1) {
    console.log('players win')
}else if(2 || 0) {
    console.log('computer win')
}