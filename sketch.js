var blorp
function setup() {
  createCanvas(400,400);
 blorp= createSprite(200,200,10,10)
 blorp.shapeColor="teal"
}

function draw() 
{
  background(30);
 drawSprites()
 if(keyDown(RIGHT_ARROW)){
blorp.position.x=blorp.position.x+12
 }
 if(keyDown(LEFT_ARROW)){
  blorp.position.x=blorp.position.x-12
   }
   if(keyDown(UP_ARROW)){
    blorp.position.y=blorp.position.y-12
     }
     if(keyDown(DOWN_ARROW)){
      blorp.position.y=blorp.position.y+12
       }
 }





