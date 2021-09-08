var garden,rabbit;
var gardenImg,rabbitImg,applImg,preLeaf;
var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applImg = loadImage("apple.png")
  preLeaf = loadImage("redImage.png")
  preLeaf2 = loadImage("leaf.png")
  preLeaf3 = loadImage("orangeLeaf.png")
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
  apple= createSprite(200,0,10,10);
  leaf = createSprite(200,0,10,10);
  leaf2 = createSprite(200,0,10,10);
  leaf3 = createSprite(200,0,10,10);
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  if(keyDown("right"))
  {
    rabbit.x=rabbit.x+3
  }
  if(keyDown("left"))
  {
    rabbit.x=rabbit.x-3
  }
  var rand =  Math.round(random(1,5))
if(frameCount%80==0)
{
  if(rand==1)
  {
    apple= createSprite(200,0,10,10);
    apple.addImage(applImg);
    apple.scale = .065
  apple.x=Math.round(random(10,350))
  apple.velocityY=+4.5;
  
  }
  else if(rand == 2){
    leaf = createSprite(200,0,10,10);
    leaf.addImage(preLeaf);
    leaf.scale = .065
  leaf.x=Math.round(random(10,350))
  leaf.velocityY=+4.5;
  }
else if(rand == 3){
  leaf3 = createSprite(200,0,10,10);
  leaf3.addImage(preLeaf2);
  leaf3.scale = .065
leaf3.x=Math.round(random(10,350))
leaf3.velocityY=+4.5;
      }
else { 
  leaf2 = createSprite(200,0,10,10);
  leaf2.addImage(preLeaf3);
  leaf2.scale = .065
leaf2.x=Math.round(random(10,350))
leaf2.velocityY=+4.5;
          }
}
if(rabbit.isTouching(leaf))
{
leaf.visible = false;
}
if(rabbit.isTouching(apple))
{
apple.visible = false;
}
if(rabbit.isTouching(leaf2))
{
leaf2.visible = false;
}
if(rabbit.isTouching(leaf3))
{
leaf3.visible = false;
}


  
  drawSprites();
}


/*
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud2;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloud2 = loadImage("cloud.png")
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 if(frameCount%80==0)
 {
 cloud=createSprite(600,100,40,10);
 cloud.addImage(cloud2);
 cloud.scale = 0.57
 cloud.y=Math.round(random(2,55))
 cloud.velocityX=-3;
 cloud.depth=trex.depth;
 trex.depth = trex.depth+1;
}
}
*/