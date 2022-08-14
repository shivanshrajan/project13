var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spwanApples();
  spawnOrange();
  spawnRed();
   drawSprites();
   
  
// var select_sprites = Math.round(random(1,3);

// var select_sprites = Math.round(random(1,3);

// var select_sprites = Math.round(randam(1,3);

// var select_sprites = Math.round(random(1,3);

  
  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }



}

function spwanApples() {
if(frameCount % 60 === 0){
apple = createSprite(50, 350,40, 10);
apple.addImage(appleImg);
apple.y=  Math.round(random(10,60))
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
}

function spawnOrange() {
if(frameCount % 60 === 0){
orange = createSprite(random(50, 350),40, 10, 10);
orange.addImage(orangeImg);
orange.y= Math.round(random(10,60))
orange.scale=0.08;
orange.velocityY = 3;
orange.lifetime = 150;
}
}

function spawnRed() {
if(frameCount % 60 === 0){
red = createSprite(random(50, 350),40, 10, 10);
red.addImage(redImg);
red.y=Math.round(random(10,60))
red.scale=0.06;
  red.velocityY = 3;
  red.lifetime = 150;
}
}
