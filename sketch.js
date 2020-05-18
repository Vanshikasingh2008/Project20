  var car,wall,w;
  var speed,weight,deformation;

  function setup() {
    createCanvas(1600,400);
    car = createSprite(50, 200, 50, 50);
    car.shapeColor = "white";
    //car.debug = true;
    wall = createSprite(1500,200,60,200);
    wall.shapeColor = rgb(80,80,80);
    //wall.visible = false;

   // w = createSprite(1455,200,3,200);
    //w.visible = false;

    speed = random(55,80);
    weight = random(400,1500);

    deformation = 0.5 * weight * speed * speed / 22500;
  }

  function draw() {
    background(0);
    car.velocityX = speed;
    collision();

    drawSprites();
  }

function collision(){
  if(wall.x-car.x <= wall.width/2+car.width/2){
   car.velocityX = 0;

   if(deformation<100){
    car.shapeColor = rgb(0,255,0);
  }
  if(deformation > 100 && deformation < 180){
    car.shapeColor = rgb(230,230,0);
  }
  if(deformation > 180){
    car.shapeColor = rgb(255,0,0);
  }
  }
}   