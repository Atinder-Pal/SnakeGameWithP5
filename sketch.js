let snake;
function setup(){
  createCanvas(600,600);
  snake = new Snake();
}

function draw(){
  background(220);
  snake.update();
  snake.show();
  
}