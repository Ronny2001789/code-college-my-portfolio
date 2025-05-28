var trainSpeed = 250;
var trainPosition = 0;
var animation;
var tracklength = 400;

var train = document.getElementById("train");
var stopButton = document.getElementById("stopButton");

// Create feedback UI
const statusBox = document.createElement("div");
statusBox.id = "status";
statusBox.style.marginTop = "20px";
statusBox.style.fontSize = "18px";
statusBox.style.color = "#004d40";
document.getElementById("container").appendChild(statusBox);

// Show speed
const speedDisplay = document.createElement("div");
speedDisplay.id = "speedDisplay";
speedDisplay.style.fontSize = "16px";
speedDisplay.style.marginTop = "10px";
speedDisplay.style.color = "#006064";
document.getElementById("container").appendChild(speedDisplay);

train.addEventListener("click", speedUp);
stopButton.addEventListener("click", stopTrain);

function speedUp() {
  if (trainSpeed > 10) {
    trainSpeed -= 10;
  }

  speedDisplay.textContent = "🚄 Speed: " + (250 - trainSpeed + 1) + " km/h";

  clearInterval(animation);
  animation = setInterval(frame, trainSpeed);

  function frame() {
    trainPosition += 2;
    train.style.left = trainPosition + "px";
    checkPosition(trainPosition);
  }
}

function checkPosition(currentPosition) {
  if (currentPosition >= tracklength) {
    statusBox.innerHTML = "💥 Crash! Train went off the track!";
    train.classList.add("crash-effect");
    clearInterval(animation);
    trainPosition = 0;

    setTimeout(() => {
      train.classList.remove("crash-effect");
      train.style.left = "0px";
      statusBox.textContent = "";
      speedDisplay.textContent = "";
      trainSpeed = 250;
    }, 2000);
  }
}

function stopTrain() {
  if (trainPosition < tracklength) {
    clearInterval(animation);
    statusBox.textContent = "⛔ Train stopped!";
  }
}
