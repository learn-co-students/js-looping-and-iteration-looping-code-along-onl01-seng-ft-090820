// Code your solutions in this file
const givers = ["Ada", "Brendan", "Ali"];

function writeCards(givers) {
    let messages = [];
    for (let i = 0; i < givers.length; i++) {
        messages.push(`Thank you, ${givers[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(n) {
    console.log(n);
    while (n > 0) {
        n = n - 1;
        console.log(n);
    }
}