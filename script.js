//your code here

document.addEventListener('DOMContentLoaded', function () {
    const responseElement = document.getElementById('respond');
    const btn = document.querySelector("#btn");
    btn.addEventListener("click",makeGuess);
    let secretNumber = generateRandomNumber();

    console.log(secretNumber)
    let previousGuess;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    }

    function makeGuess() {
        const guessInput = document.getElementById('guess');
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess)) {
            responseElement.textContent = 'Please enter a valid number.';
            return;
        }

        if (previousGuess !== undefined) {
            const currentDifference = Math.abs(secretNumber - userGuess);
            const previousDifference = Math.abs(secretNumber - previousGuess);

            if (currentDifference < previousDifference) {
                responseElement.textContent = 'Getting hotter! ';
                if (userGuess < secretNumber) {
                    responseElement.textContent += 'Guess higher.';
                } else {
                    responseElement.textContent += 'Guess lower.';
                }
            } else {
                responseElement.textContent = 'Getting colder. ';
                if (userGuess < secretNumber) {
                    responseElement.textContent += 'Guess higher.';
                } else {
                    responseElement.textContent += 'Guess lower.';
                }
            }
        }

        previousGuess = userGuess;
    }
});