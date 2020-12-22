let snake;
function setup(){
  createCanvas(600,600);
  snake = new Snake();
  frameRate(10);
}

function draw(){  
  background(220);
  snake.update();
  snake.show();
  
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
    case DOWN_ARROW:
      snake.setDir(1,0);
      break;
  }
}