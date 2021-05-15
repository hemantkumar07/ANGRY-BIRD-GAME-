class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.alpha=255
  }
  display(){
     if (this.body.speed>3){
      World.remove(world,this.body)
      push()
      this.alpha=this.alpha-2
      tint(255,this.alpha)
      imageMode(CENTER)
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
      pop()
    }else{
      super.display()

    }
  }
};