let secret = Math.floor(Math.random() * 20) + 1;

function makeGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = parseInt(input.value);

  if (isNaN(guess)) {
    message.textContent = "🚫 Enter a valid number!";
  } else if (guess === secret) {
    message.textContent = "🎉 Correct Guess!";
    input.disabled = true;
  } else if (guess < secret) {
    message.textContent = "📉 Too low. Try again.";
  } else if (guess > secret) {
    message.textContent = "📈 Too high. Try again.";
  }

  input.value = "";
  input.focus();
}
