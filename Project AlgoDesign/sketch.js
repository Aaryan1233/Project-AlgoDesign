var movingRect, fixedRect;

function setup() {  


  
  createCanvas(1200,800);
  movingRect = createSprite(400,400, 80, 30);  
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400,600,50,80); 
  fixedRect.shapeColor = "green"; 
  movingRect.velocityY = 3; 

  
  fixedRect.velocityY = -3; 


}

function draw() {
  background(0,0,0);    

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY; 
  /*if(movingRect.x - fixedRect.x<movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x<movingRect.width/2 + fixedRect.width/2 && 
     movingRect.y - fixedRect.y<movingRect.height/2 + fixedRect.height/2 && 
     fixedRect.y - movingRect.y<movingRect.height/2 + fixedRect.height/2
     ){ 
       movingRect.shapeColor = "red"; 
       fixedRect.shapeColor = "red";  
      } 
      else { 
        movingRect.shapeColor = "green"; 
        fixedRect.shapeColor = "green";
      }*/  
      bounceOff(movingRect,fixedRect);
    
  drawSprites();
} 

function bounceOff(OBJ1,OBJ2){                                                                                                            
if(OBJ1.x- OBJ2.x < OBJ1.width/2 + OBJ2.width/2 && 
  OBJ2.x - OBJ1.x < OBJ1.width/2 + OBJ2.width/2 
  ){ 
    OBJ1.velocityX = -1 * OBJ1.velocityX; 
    OBJ2.velocityX = -1 * OBJ2.velocityX;
  } 
  if(OBJ1.y - OBJ2.y < OBJ1.height/2 + OBJ2.height/2 && 
    OBJ2.y - OBJ1.y < OBJ1.height/2 + OBJ2.height/2  
    ){ 
      OBJ1.velocityY = -1 * OBJ1.velocityY; 
      OBJ2.velocityY = -1 * OBJ2.velocityY; 
    }  
  }