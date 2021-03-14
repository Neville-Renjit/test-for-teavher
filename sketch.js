var rocket, rocketImg;
var asteroid,asteroidImg;
var Background, BackgroundImg;


















function preload() {
  BackgroundImg = loadImage("images/star background 4.jpg");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  Background = createSprite(displayWidth/2,displayHeight/2);
  Background.addImage("Scene", BackgroundImg);
  Background.scale = 2.8;
  Background.y = Background.height/2;
}

function draw() {
  background("Blue"); 
  
  //moving background

  Background.velocityY = 3;

 if (Background.y < displayHeight) {
    Background.y = Background.height/2;
 }

  drawSprites();
}