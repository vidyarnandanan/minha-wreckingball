
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;





var ground1
var box1, box2, box3, box4
var box5, box6, box7, box8
var ball1
var chain1


function preload()
{
	



}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground1= new ground(400,680, 800, 20)

     box1= new box(700,200,100,100)
     box2= new box(700,300,100,100 )
     box3= new box(700,400,100,100)
     box4= new box(700,500,100,100)

     box5= new box(500,200,80,80)
     box6= new box(500,300,80,80)
     box7= new box(500,400,80,80)
     box8= new box(500,500,80,80)

     ball1= new ball(200,400,50,50)
     chain1= new chain(ball1.body, {x: 200, y: 100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  ball1.display()
  chain1.display()
 
}

function mouseDragged(){

  Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){

  Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 80, y: -80})
}



