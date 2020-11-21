
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thrown = false;

function preload()
{
	boyimg = loadImage("sprites/boy.png")
}


function setup() {
	createCanvas(1275, 606);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(1000,450)

   ground1 = new Ground(637,550,1275,20)

   stone1 = new Stone(150,435)

   mango1 = new Mango(1000,200)
   mango2= new Mango(920,200)
   mango3 = new Mango(800,200)
   mango4 = new Mango(850,250);
	mango5 = new Mango(880,100);
	mango6 = new Mango(1000,100);
  mango7 = new Mango(1100,150);
  mango8 = new Mango(1100,220)


   sling1 = new SlingShot(stone1.body,{x:150,y:435})
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200,200,200);


	ground1.display();
	tree1.display();
	//boy.display();
	sling1.display();
	stone1.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	boy =createSprite(200, 485, 10,10);
  boy.addImage(boyimg)
  boy.scale=0.1

	detect(stone1,mango1);
	detect(stone1,mango2);
	detect(stone1,mango3);
	detect(stone1,mango4);
	detect(stone1,mango5);
	detect(stone1,mango6);
	detect(stone1,mango7);
	detect(stone1,mango8);


	drawSprites();

}

function mouseDragged(){
	if (thrown == false){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	}
}

function mouseReleased(){
	sling1.fly();
	thrown = true;
}

function detect(rock,mangoa){
	RPosition = rock.body.position;
	MPosition = mangoa.body.position;

	var distance=dist(RPosition.x,RPosition.y,MPosition.x,MPosition.y);
	if(distance<=mangoa.radius+rock.radius){
		Matter.Body.setStatic(mangoa.body,false);
		console.log("rock")
	}
}

function keyPressed(){
    if (keyCode==32){
		sling1.attach(stone1.body);
		thrown = false;
    }
}
