
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree,treeImg;
var ground1;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var launcher;

function preload()
{
	treeImg=loadImage("Plucking mangoes/tree.png");
	boyImg=loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	tree=createSprite(615,300,50,10);
	tree.addImage(treeImg);
	tree.scale=0.32;

	boy=createSprite(170,440,50,50);
	boy.addImage(boyImg);
	boy.scale=0.1;

	//Create the Bodies Here.
	ground1= new Ground(400,height-10,800,10);

	mango1= new Mango(600,160,20);
	mango2= new Mango(670,200,20);
	mango3= new Mango(740,220,20);
	mango4= new Mango(520,230,20);
	mango5= new Mango(560,270,20);
	mango6= new Mango(600,220,20);
	mango7= new Mango(680,250,20);

	stone= new Stone(120,400,20);

	launcher= new Elastic(stone.body,{x:120,y:380});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("lightpink");

  ground1.display();

  drawSprites();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
 
}

function detectCollision(obj1,obj2){
	obj1BodyPos=obj1.body.position
    obj2BodyPos=obj2.body.position

	var distance= dist(obj1BodyPos.x,obj1BodyPos.y,obj2BodyPos.x,obj2BodyPos.y)
	if(distance<=obj1.radius+obj2.radius){
		Matter.Body.setStatic(obj2.body,false);
	}
	/*if(obj1Pos.x-obj2Pos.x<obj1.radius+obj2.radius
	&& obj1Pos.y-obj2Pos.y<obj1.radius+obj2.radius
	&& obj2Pos.x-obj1Pos.x<obj1.radius+obj2.radius
    && obj2Pos.y-obj1Pos.y<obj1.radius+obj2.radius){

		Matter.Body.setStatic(obj2.body.false)
	}*/
	
}


function mouseReleased(){
	launcher.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function keyPressed(){
	if(keyCode === 32){
		//launcher.attach(stone.body);
		Matter.Body.setPosition(stone.body,{x:120,y:400});
		launcher.attach(stone.body);
	}
}