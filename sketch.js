const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11
var player
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    stopper = Bodies.rectangle(30,70,10,10);
    player = new Player(30,50,10,10);
 wall1 = new Wall(10, 50, 20, 100);
 wall2 = new Wall(50, 50, 20 , 100);
 wall3 = new Wall (50,130,100,20);
 wall4 = new Wall (110,170,20,100); 
 wall5 = new Wall (150,170,20,100);
 wall6 = new Wall (150,270,20,100);
 wall7 = new Wall (110,270,20,100);
 wall8 = new Wall (129,334,63,30);
 wall9 = new Wall(110,90,100,20);
 wall10 = new Wall (210,90,100,20);
 wall11 = new Wall (270,130,20,100);
 wall12 = new Wall (270,220,20,100);
 wall13 = new Wall (200,160,90,20);
 wall14 = new Wall (230,200,90,20);
 wall15 = new Wall (200,240,90,20);
 wall16 = new Wall (238,340,150,20);
 wall17 = new Wall (304,180,20,300);
 wall18 = new Wall (187,20,253,20);
 //wall19 = new Wall (200,240,90,20);
 //wall20 = new Wall (200,240,90,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    player.display();
    if(keyIsDown(UP_ARROW)){
       stopper.x-=2;
        //player.velocityX=0;
        //player.velocityY=3;

    }
    rectMode(CENTER);
        rect( stopper.position.x, stopper.position.y,10,10);

   /* if(stopper.isTouching(player)){
      stopper.visible=false;

    }*/
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    //wall19.display();
   // wall20.display();
    //wall21.display();
    //wall22.display();
    //wall23.display();
    drawSprites();

}
