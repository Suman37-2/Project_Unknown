var starImg,bgImg;
var star, starBody;
var fairy1,fimg,fs;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fs = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy1 = createSprite(400,470);
	fairy1.addAnimation("fair",fimg);
    fairy1.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fs.play();

  

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y>460 && starBody.position.y>460){
	 Matter.Body.setStatic(starBody,true); 
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
	   fairy1.x = fairy1.x-15;
	}
	
	if (keyCode === RIGHT_ARROW) {
		fairy1.x = fairy1.x+15;
	}
}
