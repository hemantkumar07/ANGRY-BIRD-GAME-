class Bird   {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body=Bodies.circle(x,y,20,options)
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    World.add(world, this.body);
    this.radius=20
    this.trajectory=[]
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
    
    if (this.body.position.x>220 && this.body.velocity.x>10){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
    // console.log(this.trajectory)
    
    //this.trajectory
    //[    [x1,y1],   [x2,y2],    [x3,y3], ...........]

    for(var i=0 ; i<this.trajectory.length ; i++){
      var x=this.trajectory[i][0]
      var y=this.trajectory[i][1]
      image(this.smoke,x,y)
    }
    

  }
}
