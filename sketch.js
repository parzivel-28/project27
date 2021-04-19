
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var toproof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  toproof=new Roof(600,100,600,50);
  bob1=new Bob(350,500,80);
  bob2=new Bob(500,500,80);
  bob3=new Bob(650,500,80);
  bob4=new Bob(800,500,80);
  rope1=new Rope(bob1.body,toproof.body,-200,0);
  rope2=new Rope(bob2.body,toproof.body,-100,0);
  rope3=new Rope(bob3.body,toproof.body,0,0);
  rope4=new Rope(bob4.body,toproof.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  toproof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob4.body.position,{x:-50,y:-45})
  }
  
}



