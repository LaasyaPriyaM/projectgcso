var car, wall, speed, weight;

function setup() {
  
  createCanvas(1400,1600);

  speed = random(55,90);
  weight = random(400,1500);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  car1 = createSprite(50, 400, 50, 50);
  car1.velocityX = speed;
  car1.shapeColor = "white";

  car2 = createSprite(50, 600, 50, 50);
  car2.velocityX = speed;
  car2.shapeColor = "white";


  wall = createSprite(1100,400,60,height/2);
  wall.shapeColor = color(80,80,80);
  


}

function draw() {
  background("black");

  if(wall.x - car.x < (car.width + wall.width)/2){
      car.velocityX = 0;

    var deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation < 80){
      car.shapeColor = "green";
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      car.shapeColor = "red";
    }
  }
  
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car1.velocityX = 0;

  var deformation = (0.5 * weight * speed * speed)/22500;
  if(deformation < 80){
    car1.shapeColor = "green";
  }
  if(deformation > 80 && deformation < 180){
    car1.shapeColor = color(230,230,0);
  }
  if(deformation > 180){
    car1.shapeColor = "red";
  }
}

if(wall.x - car.x < (car.width + wall.width)/2){
  car2.velocityX = 0;

var deformation = (0.5 * weight * speed * speed)/22500;
if(deformation < 80){
  car2.shapeColor = "green";
}
if(deformation > 80 && deformation < 180){
  car2.shapeColor = color(230,230,0);
}
if(deformation > 180){
  car2.shapeColor = "red";
}
}

  drawSprites();
}
