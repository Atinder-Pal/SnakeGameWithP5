class Snake{
  constructor(){
    this.body = [];
    this.body.push(createVector(0,0));    
    this.xdir = 1;
    this.ydir = 0;
    this.res = 10;
    this.len = 1;
  }

  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }

  endGame(){
    let x = this.body[this.body.length -1].x;
    let y = this.body[this.body.length -1].y;
    for(let i =0; i< this.body.length -1; i++){
      let part = this.body[i];
      if(part.x == x && part.y == y){
        return true;
      }
    }
    return false;
  }

  grow(){
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  eat(pos){
    let headX = this.body[this.body.length-1].x;
    let headY = this.body[this.body.length-1].y;
    if(pos.x == headX && pos.y == headY) 
      return true;
    else 
      return false;
  }

  update(){ 
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir * this.res;
    head.y += this.ydir * this.res;  
    this.body.push(head);   
    if(this.body[this.body.length-1].x  >= width + this.res){
      this.body[this.body.length-1].x = 0;
    }else if(this.body[this.body.length-1].y  >= height+ this.res){
      this.body[this.body.length-1].y = 0;
    } else if(this.body[this.body.length-1].x < 0){
      this.body[this.body.length-1].x = width-this.res;
    } else if(this.body[this.body.length-1].y  < 0){
      this.body[this.body.length-1].y = height-this.res;
    }
  }

  show(){
    fill(0);
    for(let part of this.body){
      rect(part.x, part.y, this.res, this.res);
    }    
  }
}