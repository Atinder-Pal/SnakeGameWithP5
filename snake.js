class Snake{
  constructor(){
    this.body = [];
    this.body.push(createVector(0,0));
    this.res = 10;
    this.xdir = 1;
    this.ydir = 0;
  }
  update(){
    this.body[0].x += this.xdir * this.res;
    this.body[0].y += this.ydir * this.res;;
  }

  show(){
    fill(0);
    rect(this.body[0].x, this.body[0].y, this.res, this.res);
  }
}