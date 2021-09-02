var garden,rabbit; 
var gardenImg,rabbitImg;
var Apple,AppleImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("Apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    rabbit.x=rabbit.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    rabbit.x=rabbit.x+5
  }
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApple();
    } else if (select_sprites == 2) {
      createApple();
    }else {
      createApple();
    }
  }
  
  if (frameCount % 100 == 0) {
    if (select_sprites == 1) {
      createleaf();
    } else if (select_sprites == 2) {
      createleaf();
    }else {
      createleaf();
    }
  }
}

  

//function to creatApple
function createApple(){
   // write your code here 
   Apple=createSprite(random(50,350),40,10,10);
   //Apple image to Apple sprite
   Apple.addImage(AppleImg)
   //scale the sprite if requried
   Apple.scale=0.1
   //Give the velocity so that Apples move downloads
   Apple.velocityY=5;
   //Give lifetime to Apple sprite
   Apple.lifetime = 150

  
 }

//function to creatleaf
function createleaf(){
  // write your code here 
  leaf=createSprite(random(50,350),40,10,10);
  //leaf image to leaf sprite
  leaf.addImage(leafImg)
  //scale the sprite if requried
  leaf.scale=0.1
  //Give the velocity so that leaf move downloads
  leaf.velocityY=5;
  //Give lifetime to leaf sprite
  leaf.lifetime = 150

 
}

