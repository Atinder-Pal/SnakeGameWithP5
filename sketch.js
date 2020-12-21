var snake;
var scl =20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(51);
  snake.update();
  snake.show();
}

function keyPressed(){
  //Citation https://p5js.org/reference/#/p5/keyCode
  if(keyCode === UP_ARROW){
    snake.dir(0,-1);
  }else if(keyCode === DOWN_ARROW){
    snake.dir(0,1);
  }else if(keyCode === RIGHT_ARROW){
    snake.dir(1,0);
  }else if(keyCode === LEFT_ARROW){
    snake.dir(-1,0);
  }
}

