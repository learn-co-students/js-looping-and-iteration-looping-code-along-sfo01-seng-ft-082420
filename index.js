// Code your solutions in this file
function writeCards(array, string) {
    const names = []
    for (let i = 0; i < array.length; i++) {
        names.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return names
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}
