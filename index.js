// Code your solutions in this file
function writeCards(array, name) {
    let thankYouCards = [];
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    return thankYouCards;
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
    console.log(num);
}