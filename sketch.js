
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var myworld;
var myEngine;

function setup() {
	createCanvas(1000, 500);


	myEngine=Engine.create();
  myworld=myEngine.world;

	//Create the Bodies Here.

  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(500,495,1000,10,ground_option);
  World.add(myworld,ground)

    waste= new Paper(100,350,20);
    d1=new dustbin(750,420);
    w1= new Wall(800,430,5,150);
    w2=new Wall(750,485,100,5);
    w3=new Wall(700,430,5,150);

    keyPressed()
    
	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  fill("purple")
  background("lightblue");
  waste.display();
  d1.display();
  w1.display();
  w2.display();
  w3.display();
  fill("brown");
  rect(ground.position.x,ground.position.y,1000,10);
  drawSprites();

}

  function keyPressed(){
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(waste.body,waste.body.position,{x:65,y:-75});
    }
  }




