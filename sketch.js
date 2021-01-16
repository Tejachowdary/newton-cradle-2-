const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var Pendulum1,Pendulum2, rope,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 600, 1200, 20);
 Pendulum1=new Pendulum(200,400,50,50);
 rope=new Rope(Pendulum1.body,{x:200,y:200});

 Pendulum2=new Pendulum(250,400,50,50);
 rope2=new Rope(Pendulum2.body,{x:250,y:200});

 Pendulum3=new Pendulum(300,400,50,50);
 rope3=new Rope(Pendulum3.body,{x:300,y:200});

 Pendulum4=new Pendulum(350,400,50,50);
 rope4=new Rope(Pendulum4.body,{x:350,y:200});

 Pendulum5=new Pendulum(700,400,50,50,"red");
 rope5=new Rope(Pendulum5.body,{x:400,y:200});


}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
Pendulum1.display();
rope.display();

Pendulum2.display();
rope2.display();

Pendulum3.display();
rope3.display();

Pendulum4.display();
rope4.display();

Pendulum5.display();
rope5.display();
}


function mouseDragged() {
  Matter.Body.setPosition(Pendulum1.body, { x: mouseX, y: mouseY });
}


