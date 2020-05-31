//target the value
let msg = document.querySelector('.msg');
let guess = document.querySelector('input');
let btn = document.querySelector('.btn');

// if user click on start button
let play = false;
let newWords = '';
let randWords = '';
// create Array
let swords = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'gun', 'hen', 'iron', 'jug', 'kite', 'lion', 'monkey', 'nurse', 'orange', 'pen', 'queen', 'rose', 'sun', 'tea', 'umbrella', 'ven', 'wicket', 'yak', 'zebra'];

let createNewWords = () => {
    let ronNum = Math.floor(Math.random() * swords.length);
    let newTemSwords = swords[ronNum];
    return newTemSwords;
}

let scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split('')).join('');
        msg.innerHTML = ` Guess the Word : ${randWords}`;
    }
    else {

        let tempWord = guess.value;
        if (tempWord === newWords) {
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = 'Start Again';
            guess.classList.toggle('hidden');
            guess.value = '';

        }
        else {
            msg.innerHTML = `Sorry, it's not Correct Answer. please try again
            ${randWords}`;
        }

    }
})