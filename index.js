// Code your solutions in this 
function writeCards(stringNames,event){
    let allMessages = []
for (let i = 0; i < stringNames.length; i++ ) {

    allMessages.push( `Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`);
}
return allMessages;
}

function countDown(number){
    while (number > 0){
        console.log(number);
        number -= 1;
    }

    console.log( number );
}


