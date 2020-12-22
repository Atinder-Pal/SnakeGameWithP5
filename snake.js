class Snake{
  constructor(){
    this.body = [];
    this.body.push(createVector(0,0));    
    this.xdir = 1;
    this.ydir = 0;
    this.res = 10;
  }

  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }

  eat(pos){
    let headX = this.body[0].x;
    let headY = this.body[0].y;
    if(pos.x == headX && pos.y == headY) 
      return true;
    else 
      return false;
  }

  update(){ 
    this.body[0].x += this.xdir * this.res;
    this.body[0].y += this.ydir * this.res;     
    if(this.body[0].x + this.res >= width){
      this.body[0].x = 0;
    }else if(this.body[0].y + this.res >= height){
      this.body[0].y = 0;
    } else if(this.body[0].x < 0){
      this.body[0].x = width-this.res;
    } else if(this.body[0].y  < 0){
      this.body[0].y = height-this.res;
    }
  }

  show(){
    fill(0);
    rect(this.body[0].x, this.body[0].y, this.res, this.res);
  }
}