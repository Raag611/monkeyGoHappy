var PLAY=1;
var END=0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)  
monkey=createSprite(80,315,20,20)  
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1 

ground=createSprite(400,350,900,10) 

  

 FruitGroup=new Group(); 
 obstacleGroup= new Group();
  
}


function draw() {
background("white");
 if(gameState===PLAY){
  
ground.velocityX=-4
   

ground1();
banana1();
obstacle1();   
 }
monkey.collide(ground);
  
 if(gameState===END){
   ground.velocity=0
   obstacleGroup.setVelocityEach(0);
   FruitGroup.setVelocityEach(0);
 } 
stroke("white");  
textSize(20);
fill("white");
text("Score:"+score,500,50);
if(monkey.isTouching(obstacleGroup)){ 
   gameState=END}
if(monkey.isTouching(FruitGroup)){
  FruitGroup.destroyEach()
} 
stroke("red");
textSize(30); 
fill("black");
survivalTime=Math.ceil(frameCount/10 );
text("Survival Time="+ survivalTime,100,50);


  
drawSprites();  
}

function banana1(){
  
 
  
  
  
  
  
  
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(20,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -(4+ survivalTime/2);
    banana.scale=0.1
     //assign lifetime to the variable
    banana.lifetime = 200;
  FruitGroup.add(banana);
  }
  



}
function ground1(){
 if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
         
    }  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
    if (ground.x < 150){
      ground.x = ground.width/2;
    } 
  
}
function obstacle1(){
  
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,335,10,40);
   obstacle.velocityX = -(4+ survivalTime/5)
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.1 
   
    //assign scale and lifetime to the obstacle           

    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  
  
}



}