// Code your solutions in this file
const cards = ["Lisa", "Kaitlin", "Jan"];
const event = "surpise"
function writeCards(cards, event) {
    let array = []
    for (let i = 0; i < cards.length; i++) {
        array.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
      }
      return array;
};

let number = 10

function countDown(number) {
    while (number >= 0){
        console.log(number);
        number -= 1;
    }
};