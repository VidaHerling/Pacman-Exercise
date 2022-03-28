//use setTimeout in the Run() function

var pos = 0;
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0;

function pacmanRun() {
  let img = document.getElementById("PacMan"); //get a handle of the image
  let imgWidth = img.width
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth);
  img.src = pacArray[direction][focus]; //use PacMan pictures in the pacArray array
  if (direction) {
      pos -= 20;
      img.style.left = pos + "px"; //if direction is 1, pacman moves from right to left
  } else {
      pos += 20;
      img.style.left = pos + 'px'; //if direction is 0, pacman moves from left to right
  }
}

function checkPageBounds(direction, imgWidth) {
    if(pos + imgWidth >= window.innerWidth){
      direction = 1;
    }
    if(pos <= 0){
      direction = 0;
    } 
    return direction;
  }


mixBut.addEventListener("click", Start); //button inital status

function Start(){
    console.log("Started");
    mixBut.removeEventListener("click", Start)
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
}

function Stop(){
    console.log("Stopped");
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}

let run; 
function Run(){
  if(mixBut.value === "Start"){
    run = setInterval(pacmanRun, 200);
  } 
  if(mixBut.value === "Stop") {
    clearInterval(run);
  }
}




