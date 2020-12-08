

function writeCards(cards, occasion) { 
    const new_array = []
    for (let i = 0; i < cards.length; i++) { 
    new_array.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
    }
    return new_array;
}

function countDown(int) { 
    while (int > -1 ) { 
        console.log(int);
        --int;
    }
}


