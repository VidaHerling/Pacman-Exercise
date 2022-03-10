//pacmen1.js: use setTimeout in the Run() function
//pacmen2.js: use setInterval in the Run() function

var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
    setTimeout(Run, 200); // Use setTimeout to call Run every 200 millesecs
}

//my code below
function checkPageBounds(direction, imgWidth) {
if(pos + imgWidth >= window.innerWidth){
direction = 1;
}
if(pos <= 0){
direction = 0;
} 
return direction;
}
