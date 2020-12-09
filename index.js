// Code your solutions in this file
function writeCards(array, event) {
    const cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return cards; 
}

function countDown(num) {
    while (num > 0) {
        console.log(num); 
        num -= 1;
    }
    console.log(num); 
}