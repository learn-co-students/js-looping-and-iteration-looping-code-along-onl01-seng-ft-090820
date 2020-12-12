// Code your solutions in this file
// const names = ["Ada", "Brendan", "Ali"];
// const events = ["birthday", "surprise"];

function writeCards(names, events) {
    const array = [ ];
    for (let i = 0; i < names.length; i++) {
        array[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
    }
    return array;
}

let number = 10;
function countDown(number){
    while(number >= 0) {
        console.log(number--);
    }

}