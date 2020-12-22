class Snake{
  constructor(){
    this.body = [];
    this.body.push(createVector(0,0));
  }
  update(){

  }

  show(){
    fill(0);
    rect(this.body[0].x, this.body[0].y, 10, 10);
  }
}