const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Events = Matter.Events; 

var particles = []; 
var plinkos = []; 
var divisions = []; 
var ground, world, body;  
var divisionHeight = 300;
//var width = 20; 
//var height = 100;

function setup() {
  createCanvas(563,800);
  
  engine = Engine.create(); 
  world = engine.world;
  

  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,height,1000,20); 

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75)); 
  }
  for(var j = 15; j <= width-10; j += 50){ 
    plinkos.push(new Plinko(j,175)); 
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine);   
  ground.display();
  
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display(); 
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(100, 700), 10, 10)); 
  }

  for(var b = 0; b <particles.length; b++){
    particles[b].display();   
  }
  for(var a = 0; a < divisions.length; a++){
    divisions[a].display(); 
  }

  drawSprites();
}