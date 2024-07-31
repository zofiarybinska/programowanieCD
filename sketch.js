let myFont;
let bram;
let strzR;
let strzU;
let strzL;
let pilka;
let dot;
let DONE;
let pilkaX;
let pilkaY;
let speedX;
let speedY;
let chapter = 0;
let score = 0;
let arrowsOn = false;
let t = 0;

function preload() {
  myFont = loadFont('PixelifySans-VariableFont_wght.ttf');
  bram = loadImage('bramka_1.png');
  strzR = loadImage('strzalka_prawo.png');
  strzU = loadImage('strzalka_gora.png');
  strzL = loadImage('strzalka_lewo.png');
  pilka = loadImage('pilka.png');
  dot = loadImage ('goal_point.png');
  DONE = loadImage('strzalka.png');
}

function setup() {
  createCanvas(1920, 1080);
  imageMode(CENTER);
  textFont(myFont)
  textAlign(CENTER, CENTER);
}

function draw() {
  //background(110, 193, 103);
  fill(0);
  textSize(40);
  if (chapter == 0) {
    background(0);
    fill(110, 193, 103);
    textSize(40);
    text('level 1 Denial ', 1920/2, 1080/2);
  }
  if (chapter == 1) {
    background(110, 193, 103);
    pilkaX = width / 2; // pozycja pilki
    pilkaY = 790; // pozycja pilki
    arrows();
    bramka();
    image(pilka, pilkaX, pilkaY);
  }

  if (chapter == 2) {
    background(110, 193, 103);
    arrowsOn = false;
    bramka();
    pilkaX += speedX;
    pilkaY += speedY;
    image(pilka, pilkaX, pilkaY);
    if (score < 6) { // cztery pierwsze uderzenia
      if (speedX == 0) {// to znaczy, że kliknięto strzałkę do góry
        if (pilkaY <= 650) {
          stopPilka();
        }
      } else {// to znaczy, że klinkęto strzałkę w lewo lub prawo
        if (pilkaY <= 300) {
          stopPilka();
        }
      }
    } else {//ostatnie uderzenie
      if (pilkaY <= -50) {// poza ekranem
        stopPilka();
      }
    }
  }

  if (chapter==3) {
    background(110, 193, 103);
    bramka();
    image(DONE, 1500, 800);
  }
  if(chapter==4) {
    ekran2();
  }
}

function mousePressed() {
  if (chapter == 0) {
    chapter = 1;
  }
  
  if (arrowsOn) {
    if (mouseX > 680 - strzR.width / 2 && mouseX < 680 + strzR.width / 2 &&
        mouseY > 960 - strzR.height / 2 && mouseY < 960 + strzR.height / 2) {
      chapter++;
      score++;
      speedX = 6;
      speedY = -6;
    }

    if (mouseX > width/2 - strzU.width / 2 && mouseX < width/2 + strzU.width / 2 &&
        mouseY > 960 - strzU.height / 2 && mouseY < 960 + strzU.height / 2) {
      chapter++;
      score++;
      speedX = 0;
      speedY = -12;
    }

    if (mouseX > 1240 - strzL.width / 2 && mouseX < 1240 + strzL.width / 2 &&
        mouseY > 960 - strzL.height / 2 && mouseY < 960 + strzL.height / 2) {
      chapter++;
      score++;
      speedX = -6;
      speedY = -6;
    }
  }

  if (chapter == 3) { // Strzałka końcowa
    if (mouseX > 1500 - DONE.width / 2 && mouseX < 1500 + DONE.width / 2 &&
        mouseY > 800 - DONE.height / 2 && mouseY < 800 + DONE.height / 2) {
      chapter = 4; // Przejście do ekran2
    }
  } else if (chapter == 4) { // Ekran2 wyświetlony
    chapter = 5; // Otwiera link
  //} else if (chapter == 5) { // Link otwierany po kliknięciu
    window.open('https://sunsetlika.github.io/projekt/', '_self');
  }
}

function arrows() {
  arrowsOn = true;
  image(strzR, 680, 960);
  image(strzU, width/2, 960);
  image(strzL, 1240, 960);
}

function bramka() {
  image(bram, width/2, height/2-220);
  image(dot, width/2, 830);
}

function goal() {
  fill(249, 230, 67);
  textSize(80+score*30);
  let goalX = width/2 + random(-score, score)*2;
  let goalY = height/2 + random(-score, score)*2;
  text('GOAL!', goalX, goalY);
}

function stopPilka() {
  speedX = 0; // pilka robi stop
  speedY = 0; // pilka robi stop
  goal();
  if (t >= 45) {
    if (pilkaY < 0) {
      chapter = 3;
    } else {
      chapter = 1;
    }
    t = 0;
  }
  t++;
 
}
function ekran2(){
  background(0);
  fill(212,163,115);
  textSize(40);
  text('level 2 Anger',1920/2, 1080/2); 
}
