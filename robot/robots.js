document.getElementById("lefteye").style.backgroundColor = "yellow";
document.getElementById("head").style.transform = "rotate(50deg)";
document.getElementById("rightarm").style.left = "300px"

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
function moveUpDown(e) {
 var robotPart = e.target;
 var top = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.top = top + '%';
 top++;
 if (top === 26){
 clearInterval(id);
 }
 }
}



var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveleftright);
function moveleftright(e) {
 var robotPart = e.target;
 var top = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.top = top + '%';
 top++;
 if (top === 26){
 clearInterval(id);
 }
 }
}




var leftarm = document.getElementById("leftarm");
leftarm.addEventListener("click", moveUpDown);
function moveUpDown(e) {
 var robotPart = e.target;
 var top = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.top = top + '%';
 top++;
 if (top === 20){
 clearInterval(id);
 }
 }
}






var rightarm = document.getElementById("rightarm");
rightarm.addEventListener("click", moveUpDown);
function moveUpDown(e) {
 var robotPart = e.target;
 var top = 0;
 var id = setInterval(frame, 10) // draw every 10ms
 function frame() {
 robotPart.style.top = top + '%';
 top++;
 if (top === 20){
 clearInterval(id);
 }
 }
}










