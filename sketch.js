let zam1;
let zam2;
let zam3;
let click = false;
let chapter = 0;
let img;
let count = 0;
let myFont;
let tx = 1920 / 2 - 300;
let ty = 1080 / 2 - 300;
let ekran = 0;

function preload() {
  zam1 = loadImage('zamek1.png');
  zam2 = loadImage('zamek2.png');
  zam3 = loadImage('zamek3.png');
  img = loadImage('bilet.png');
  strz = loadImage('strzalka.png');
  myFont = loadFont('PixelifySans-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(1920,1080);
  noCursor();
  describe('The cursor appears as image.');
  textSize(40);
  textFont(myFont)
  textAlign(CENTER,CENTER);
}

function draw() {
  background(192, 223, 161); 
  fill(0);
  text('catch the castle!',1920/2,200);
  if (count == 0) {
    background(0);
    fill(192, 223, 161);
    text('level 1 Denial ',1920/2,1080/2);
  }
   if (count >= 4) {
    image(strz,1500,800);}
  translate(1920/2 - 300, 1080/2 - 300);
  if (count == 1) {
      image(zam1, 50, 50);
    }
  else if (count == 2) {
      image(zam2, 50, 50);
    }
   else if (count == 3) {
     
    image(zam3, 50, 50);
      
   } else if (count == 4) {
    zam3.resize(0,0);
  }
 
if (count>0) {
  image(img, mouseX, mouseY);
}
if(ekran == 1){
  background(0);
    fill(212,163,115);
    text('level 2 Anger',1920/2 - tx ,1080/2 - ty);
}
}
function mousePressed() {  
count ++ 
//if(mouseX - tx > 1500 && mouseX - tx < 1500 + strz.width && mouseY - ty > 800 && mouseY - ty < 800 + strz.height){
  if(count>4){
  ekran = 1;
 }
 if(count==7){
    window.open('https://sunsetlika.github.io/projekt/','_self');
 }
}
