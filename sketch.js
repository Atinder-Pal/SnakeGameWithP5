let snake;
let food;
let cols;
let rows;


function setup(){
  createCanvas(600,600);  
  snake = new Snake();
  cols = floor(width/snake.res);
  rows = floor(height/snake.res);
  frameRate(10);
  foodLocation();
}

function foodLocation(){
  let x = floor(random(cols)) * snake.res;
  let y = floor(random(rows)) * snake.res;
  food = createVector(x,y);
}

function restart()
{  
  snake = new Snake();
  foodLocation();
  this.hide();
  loop();
}
function draw(){ 
  background(220);
  if(snake.eat(food)){
    foodLocation();
    snake.grow();    
  }
    
  snake.update();
  snake.show(); 
  if(snake.endGame()){
    background(255,0,0);
    noLoop();
    textSize(35);
    text('Game Over', (width/2)-120 , height/3);
    text(`Score: ${(snake.len)-1}`, (width/2)-120, (height/3)+80);
    button = createButton("Restart");
    button.position((width/2)-80, height/2);
    button.mousePressed(restart);
  }

  noStroke();
  fill(255,0,0);
  rect(food.x,food.y,snake.res, snake.res);
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW:
      snake.setDir(0,-1);
      break;
    case DOWN_ARROW:
      snake.setDir(0,1);
      break;
    case LEFT_ARROW:
      snake.setDir(-1,0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1,0);
      break;
  }
}