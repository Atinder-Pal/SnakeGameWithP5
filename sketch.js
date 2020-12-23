let snake;
let food;
let cols;
let rows;
let score;
let r, g, b;

function setup(){
  createCanvas(600,600); 
  
  snake = new Snake();
  cols = floor(width/snake.res);
  rows = floor(height/snake.res);
  frameRate(10);
  foodLocation();
  r = random(255);
  g = random(255);
  b = random(255);
}

function foodLocation(){
  let x = floor(random(cols)) * snake.res;
  let y = floor(random(rows)) * snake.res;
  food = createVector(x,y);  
  console.log("foodLocation");
}

function foodColor(){
  r = random(255);
  g = random(255);
  b = random(255);
}

function restart(){  
  snake = new Snake();         
  foodLocation();
  this.hide();
  button1.hide();
  loop();
}

function nextLevel(){
  snake = new Snake();  
  frameRate(30);        
  foodLocation();
  this.hide();
  button.hide();
  loop();
}

function draw(){ 
  background(225);
  
  if(snake.eat(food)){
    foodLocation();
    snake.grow();    
  }
    
  snake.update();
  snake.show(); 

  textSize(20);  
  fill(255,0,0);
  text("Score: " + `${snake.body.length -1}`, 20, 20);
  if(snake.endGame()){
    
    let highestScore = localStorage.getItem('highestScore');
    if(highestScore == null){
      localStorage.setItem('highestScore', score);
    }else{
      if(highestScore < score){
        localStorage.setItem('highestScore', score);
      }
    }

    background(255,0,0);
    fill('blue');
    noLoop();
    score = snake.len -1;
    textSize(35);
    textAlign('center');
    text('Game Over', (width/2) , height/3);
    text(`Score: ${score}`, (width/2), (height/3)+80);
    text(`Highest Score: ${highestScore > score ? highestScore: score}`, width-320, 40);
    button = createButton("Restart");
    button.position((width/2)-80, height/2);
    button.mousePressed(restart);
    button1 = createButton("Level 2");
    button1.position((width/2), height/2);
    button1.mousePressed(nextLevel);
  }

  noStroke(); 
  foodColor(); 
  fill(r,g,b);  
  console.log("foodcreationn");
  rect(food.x,food.y,snake.res, snake.res);
  console.log(`r: ${r}, g:${g}, b${b}`);
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
  if(key === ' '){
    console.log("Space");
    snake.grow();
  }
}