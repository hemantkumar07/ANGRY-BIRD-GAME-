class Strap {
    constructor (objectA,pointB){
      var options={
          bodyA:objectA,
          pointB:pointB,
          stiffness:0.06
          
      }
     this.body=Constraint.create(options)
     World.add(world,this.body) 
     this.sling1=loadImage('sprites/sling1.png')
    
     this.sling3=loadImage('sprites/sling3.png')
    }
    display(){
        image(this.sling1,190,70,30,150)
        
        if (this.body.bodyA){
            var pointA=this.body.bodyA.position
            var pointB=this.body.pointB
            push()
            stroke(48, 22, 8)
            strokeWeight(10)
            line(pointA.x,pointA.y,pointB.x-20,pointB.y-8)
            line(pointA.x,pointA.y,pointB.x+20,pointB.y-8)
            pop()

            if(pointA.x>210){
               image(this.sling3,pointA.x+15,pointA.y-10,10,30) 
            }else{
                image(this.sling3,pointA.x-20,pointA.y-10,10,30) 
 
            }
        }



    }    

    fly(){
        this.body.bodyA=null

    }
    attach(body){
        this.body.bodyA=body
    }
}