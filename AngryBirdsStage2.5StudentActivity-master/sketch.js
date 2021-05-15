//arrays
// var array1=['Piyush','Sidh','Hemant','Ritik']
// console.log(array1[3])
// array1.push('Harshit')
// console.log(array1)
// array1.pop()
// console.log(array1)
// console.log(array1.length)


// var array2= [   array1      ,   [13,14,13,13]   ]
// console.log(array2[0][1])




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var strap;
var gameState="attached"
var bg;

function preload() {
    getTime()
    sling2=loadImage('sprites/sling2.png')
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,50);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(150,305,150,PI/2);

    
    bird = new Bird(195,100);

    strap = new Strap(bird.body,{x:195,y:100});
    
}

function draw(){
if (backgroundImg){
    background(backgroundImg);

}
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    platform.display();
    log6.display();
    strap.display();
    bird.display();
    image(sling2,170,75,30,80)
}

function mouseDragged(){
 // bird.body.position.x=mouseX
 // bird.body.position.y=mouseY
 if (gameState === "attached"){  
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

 }
}
function keyPressed(){
 if (keyCode===32){
     bird.body.position.x=195;
     bird.body.position.y=100;
    strap.attach(bird.body);
    gameState = "attached"
    bird.trajectory=[]
 }
}

function mouseReleased(){
 gameState = "released"
 strap.fly();
}

async function getTime(){
    var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    
    var responseJson=await response.json()

    var datetime=responseJson.datetime

    var hour=datetime.slice(11,13)
    console.log(hour)
    if (hour>=6 && hour<=12){
        bg='sprites/bg.png'
        // console.log('I am inside if part')
    }else{
        bg='sprites/bg2.jpg'
        // console.log('I am inside else part')
    }
    backgroundImg = loadImage(bg);

}
