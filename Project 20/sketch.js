var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;
var garden, gardenImg;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,600,20,20);
    cat.addAnimation("catSitting", catImg);
    cat.scale = 0.2;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mouseStanding", mouseImg);
    mouse.scale = 0.1   ;
    
    //garden.addImage(gardenImg);
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.x = 300;
        cat.addAnimation("catHappy", catImg3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -4;
      cat.addAnimation("catMoving", catImg2);
      cat.changeAnimation("catMoving");

      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      //console.log(frameDelay);

  }
  

}
