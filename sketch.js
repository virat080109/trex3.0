
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground2.png");
cloudimage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,50,50);
trex.addAnimation("x",trex_running)
trex.scale=0.5;
ground=createSprite(200,180,400,20);
ground.addImage(groundimage);
//ground.scale=0.25;
ground.velocityX=-2
invisibleground=createSprite(200,190,400,20);
invisibleground.visible=false

}

function draw(){

  background("pink")
  if(ground.x < 0 ){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& trex.y>=100){
trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(invisibleground)

  spawnclouds();
  drawSprites();

}

function spawnclouds(){
  if(frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.y= Math.round(random(10,60))
    cloud.addImage(cloudimage);
    cloud.scale=0.5;
    cloud.velocityX=-3;
  }
 
}