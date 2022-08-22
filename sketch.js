var score=1
var end=0
var gamestate="play"
var human,humanrunning1,humanrunning2,humanrunning3,humanrunning4
var humanSprite
var ground,groundImage,invisibleGround 
var obstacle,obstacleImage

function preload(){ 
    human = loadAnimation("1left.png","2left.png","3left.png","4left.png","1right.png","2right.png","3right.png","4right.png")
    groundImage = loadImage("ground2.png")
    obstacleImage = loadImage("obstacle1.png")

    
}
function setup() {
    createCanvas(1000, 1000);
    humanSprite=createSprite(100,550)
    humanSprite.addAnimation("running",human)
    humanSprite.scale=0.3
    ground=createSprite(500,620)
    ground.addImage("ground",groundImage)
    obstacle=createSprite("100,550")
    obstacle.addImage("obstacle",obstacleImage)

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;
    
}

function draw() {
    background("black")
    drawSprites()
    ground.velocityX = -4;
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
 

}