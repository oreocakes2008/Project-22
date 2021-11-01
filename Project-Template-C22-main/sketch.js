const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5
var rop1, rop2, rop3, rop4, rop5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		restitution: 1,
		density:0.8,
		isStatic: false
	}

	bob1=Bodies.circle(320,380,20,bob_options)
	World.add(world, bob1)
	bob2=Bodies.circle(360,380,20,bob_options)
	World.add(world, bob2)
	bob3=Bodies.circle(400,380,20,bob_options)
	World.add(world, bob3)
	bob4=Bodies.circle(440,380,20,bob_options)
	World.add(world, bob4)
	bob5=Bodies.circle(480,380,20,bob_options)
	World.add(world, bob5)

	rop1=new rope(bob1, roof, -80,0);
	rop2=new rope(bob2, roof, -40,0);
	rop3=new rope(bob3, roof, 0,0);
	rop4=new rope(bob4, roof, 40,0);
	rop5=new rope(bob5, roof, 80,0);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();


  
  //create ellipse shape for multiple bobs here
 ellipse(bob1.position.x, bob1.position.y, 40,40)
 ellipse(bob2.position.x, bob2.position.y, 40,40)
 ellipse(bob3.position.x, bob3.position.y, 40,40)
 ellipse(bob4.position.x, bob4.position.y, 40,40)
 ellipse(bob5.position.x, bob5.position.y, 40,40)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45})
	}
}