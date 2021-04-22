
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj,groundObj,launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload()
{
	boy=loadImage("images/boy.png")
}
function setup() {
  	createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

stoneObj=new stone(235,420,30);

mango1=new mango(1100,100,30);
mango2=new mango(1170,130,30);
mango3=new mango(1010,140,30);
mango4=new mango(1000,70,30);
mango5=new mango(1100,70,30);
mango6=new mango(1000,230,30);
mango7=new mango(900,230,40);
mango8=new mango(1140,150,40);
mango9=new mango(1100,230,40);
mango10=new mango(1200,200,40);
mango11=new mango(1120,50,40);
mango12=new mango(900,160,40);

treeObj= new tree(800,580);
groundObject=new ground(width/2,600,width,20);
launcherObject=new launcher(stoneObj.body,{x:235,y:420})
var render = Render.create({
  element: document.body,
  engine: engine,
  options:{
    width: 1300,
    height: 600,
    wireframes: false
  }

});

	Engine.run(engine);

}

function draw() {

  rectMode(CENTER);
  background(230);
   textSize(25);
   text("Press space to try again!",50,50);
   image(boy, 200,340,200,300)
 
   
 
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  launcherObject.display();
  groundObject.display();
  
  drawSprites();

  detectcollision(stoneObj,mango1)
  detectcollision(stoneObj,mango2)
  detectcollision(stoneObj,mango3)
  detectcollision(stoneObj,mango4)
  detectcollision(stoneObj,mango4)
  detectcollision(stoneObj,mango5)
  detectcollision(stoneObj,mango6)
  detectcollision(stoneObj,mango7)
  detectcollision(stoneObj,mango8)
  detectcollision(stoneObj,mango9)
  detectcollision(stoneObj,mango10)
  detectcollision(stoneObj,mango11)
  detectcollision(stoneObj,mango12)

}

function mouseDragged()
{
  Matter.body.setPosition(stoneObj.body, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
  launcherObject.fly();
}


function keyPressed() {
  if (keycode === 32) {
   Matter.body.setPosition(stoneObj.body, {x:235, y:420})
   launcherObject.attach(stoneObj.body);
 }
 }

function detectcollision(stone,mango){

  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.x, mangoBodyPosition.x, mangoBodyPosition.y)

  if (distance<=mango.r+stone.r)
  {
     console.log(mango.r)
     Matter.Body.setStatic(mango.body,false);
  }
  
}

