var canvas;
var musicSound;
var ball,rect1,rect2,rect3,rect4;
var edges;
function preload(){
 musicSound= loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1=createSprite(100,600,200,40)
rect1.shapeColor = "red";
rect2 =createSprite(300,600,200,40)
rect2.shapeColor ="yellow";
rect3 = createSprite(500,600,200,40)
rect3.shapeColor = "blue";      
rect4 = createSprite(700,600,200,40)
rect4.shapeColor = "orange";


    //create box sprite and give velocity
ball = createSprite(20,90,40,40)
ball.shapeColor = "white";
ball.velocityX = 8;
ball.velocityY = 9;
}

function draw() {
    background("black");
    //create edgeSprite
     edges= createEdgeSprites();
     ball.bounceOff(edges)
   
    if(ball.isTouching(rect1)&&ball.bounceOff(rect1)){
ball.shapeColor = "red"
musicSound.play();
    }
    if(ball.isTouching(rect2)&&ball.bounceOff(rect2)){
     ball.shapeColor = "yellow"
     ball.velocityX = 0;
     ball.velocityY = 0;
     musicSound.stop();
  }
 if(ball.isTouching(rect3)&&ball.bounceOff(rect3)){
  ball.shapeColor = "blue"
  musicSound.play();
 }
if(ball.isTouching(rect4)&&ball.bounceOff(rect4)){
ball.shapeColor = "orange"
musicSound.play();
 }
    drawSprites();
        
}
