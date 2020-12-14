// Code your solutions in this file
const gifts = ["Lisa", "Kaitlin", "Jan"]
 
function writeCards(gifts, event) {
    let messages=[]
    for (let i = 0; i < gifts.length; i++) {
        messages.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
    }
 
    return messages;
}
 
writeCards(gifts, 'surprise');


function countDown(num) {
    while (num != -1) {
        console.log(num--)
      }
}