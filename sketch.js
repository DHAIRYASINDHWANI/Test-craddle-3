
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof;
var  bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5,world;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/7,20);

	/*bobObject1 = new Bob(100,100);
	bobObject2 = new Bob(300,100);
	bobObject3 = new Bob(500,100);
	bobObject4 = new Bob(700,100);
	bobObject5 = new Bob(900,100);*/
	bobDiameter=24;
	startBobPositionX=width/2;
	startBobPositionY=height/4 + 500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter); 

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2, 0);
	rope2=new rope(bobObject2.body,roof.body,-bobDiameter*1, 0);
	rope3=new rope(bobObject3.body,roof.body,0, 0);
	rope4=new rope(bobObject4.body,roof.body,bobDiameter*1, 0);
	rope5=new rope(bobObject5.body,roof.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}
function drawLine(constraint){
	bobObject=constraint.bodyA.position;
	roof=constraint.bodyB.position;
	roofOffset=constraint.pointB;
	roofX=roof.x+roofOffset.x;
	roofY=roof.y+roofOffset.y;
	line(bobObject.x, bobObject.y, roofX,roofY);
}
