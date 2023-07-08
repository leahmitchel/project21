
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		desnsity : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(300,200,20,ball_options)
	Matter.World.add(world,ball)

	Engine.run(engine);
  
	groundobj= new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1400,600,20,120);
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
  
  groundobj.display()
  leftSide.display(
  rightSide.display()
  )
  }

function keypressed(){
	if (keycode === UP_ARROW){
		matter.body.applyForce
	}
}

