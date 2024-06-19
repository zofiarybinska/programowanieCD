let zam1;
let zam2;
let zam3;
let click = false;
let chapter = 1;
let img;

function preload() {
  zam1 = loadImage('zamek1.png');
  zam2 = loadImage('zamek2.png');
  zam3 = loadImage('zamek3.png');
  img = loadImage('bilet.png');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  describe('The cursor appears as image.');
}

function draw() {
  background(220, 120);
  
  if (chapter == 1) {
    if (click == true) {
      click = false;
      chapter = 2;
    } else {
      image(zam1, 50, 50);
    }
  } else if (chapter == 2) {
    if (click == true) {
      click = false;
      chapter = 3;
    } else {
      image(zam2, 50, 50);
    }
   } else if (chapter == 3) {
     if (click == true) {
       click = false;
       chapter = 4;
      } else {
    image(zam3, 50, 50);
      }
   } else if (chapter == 4) {
    zam3.resize(0,0);
  }
  
  image(img, mouseX, mouseY);
  
}

function mousePressed() {
  click = true;
  
window.open ('https://sunsetlika.github.io/projekt/','_self');
}
