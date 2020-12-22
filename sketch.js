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