// Code your solutions in this file

function writeCards(array, name){
    const messagesArray = [];
    for (let i = 0; i < array.length; i++) {
        messagesArray[i] = `Thank you, ${array[i]}, for the wonderful ${name} gift!`
    }

    return messagesArray;
}

function countDown(num){
    for (let i = num; i >= 0 ; i--) {
        console.log(i)
    }
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");