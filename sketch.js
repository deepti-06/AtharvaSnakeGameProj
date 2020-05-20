var food;
var group = [];
var head;
var gameState = "play";
var score = 0;

var edges;

function setup(){
  head = createSprite(200, 200, 10, 10);
  head.velocityX = 2;
  group.push(head);
  food = createSprite(random(30,100),random(30,100),10,10);
  food.shapeColor = "yellow";
}

function draw() {
  background("black");
  edges = createEdgeSprites();
  
  if (gameState === "play") {
    
      CheckTouch();
      //moves the sprite with the arrow keys in the give directions
      move();
  }
  //if the gameState is end, change the background to red and display Game Over message to the player.
  if(gameState === "end"){
    background("brown");
    textSize(40);
    text("GAME OVER",80,200);
    head.destroy();
    group = [];
    food.destroy();
  }

  fill("green");
  textSize(25);
  text("SCORE:  " +score,10,30);
    
  drawSprites();
}

function move(){
    // move the sprite  
    //Positive speeds move the sprite in the direction of the angle, 
    //negative speeds move the sprite in a direction opposite the angle. 
    //The default direction angle is 0, to the right, and clockwise increasing. 
    //Usually a number from -360 and 360.
      if (keyDown("UP_ARROW")) {
         head.setSpeedAndDirection(4, -90);
         console.log("check");
      }
     //write code for rest of keys
  }

function CheckTouch(){
  
  
  
  if(head.isTouching(food)){
    //write code for if the head is touching the food, create the food at other x and y random locations.
      
    
    //Also, create a body sprite for the snake and add it to the group
    var body = createSprite(200,200, 10, 10);
      group.push(body);
      score ++;
  }
      //if the snake is touching the edges, make the gameState as end
      
      
      //write for all edges
  if (edges[0].isTouching(head) ){   
    
    gameState = "end";
    head.setSpeedAndDirection(0,0);
  }
  
  //make each body block follow the previous body and set the animation to it and then scale it
  for (var i = group.length - 1; i > 0; i--) {
    group[i].x = group[i-1].x;
    group[i].y = group[i-1].y;
    
  }
}

