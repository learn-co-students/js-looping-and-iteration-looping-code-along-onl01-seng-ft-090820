function writeCards(thankYou, eventName) {
    const messages = []
    for (let i = 0; i < thankYou.length; i++) {
        messages.push(`Thank you, ${thankYou[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}