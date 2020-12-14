// Code your solutions in this file

function writeCards(cards, occasion) { 
    const new_array = []
    for (let i = 0; i < cards.length; i++) { 
    new_array.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
    }
    return new_array;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i--)
    }
}