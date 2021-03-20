var ground;
var dragon; 
var dragonAnimation;
var arrow, fireBall; 
var obstacleGroup;
var backgroundImg;
var groundImg; 
function preload(){
    backgroundImg = loadImage("backgrounImg.webp");
    // step 2 load animation with extensioned images 
   dragonAnimation = loadAnimation("PC1.png","PC2.png","PC3.png");
   arrow = loadImage("arrow1.png")
   fireBall = loadImage("fireball(1).png");
   //groundImg = loadImage("groundt.png")
   
   }
function setup(){
createCanvas(windowWidth,windowHeight);

ground = createSprite(420,780,490,.01); 
//ground.addImage("groundImg", groundImg )
ground.Visibile = false; 
ground.x = ground.width/2;

// step 1 creating sprite 
dragon = createSprite(60,610,30,60);
//step 3 add animation 
dragon.addAnimation("flyingDragon",dragonAnimation);

//dragon.debug= true; 
dragon.scale = 2.0; 

obstacleGroup = createGroup();
}



function draw(){
    background(backgroundImg);
    ground.velocityX = - (4 );
    
    // continuation of ground (infinate runner)
 if (ground.x < 0){
        ground.x = ground.width/2;
    }

     //make dragon fly 
     if(keyDown("space")){
         dragon.velocityY = -14;
     }
     //add gravity to dragon 
     //shorthand addign gravity
    dragon.velocityY +=0.7;
    dragon.collide(ground);
    spawnObstacles();

    drawSprites();
}


function showError(){
    
    console.log("Error in writing to the database.");
}

function spawnObstacles(){
    //modulus checks remainder
    if(frameCount % 60 === 0){
        var obstacle = createSprite(500,130,40,15);
        obstacle.y = Math.round(random(80,500));
        obstacle.velocityX = -6;
        //generate random obstacles 
        var rand = Math.round(random(1,2));
        switch(rand) {
        case 1: obstacle.addImage(arrow);
                break;
        case 2: obstacle.addImage(fireBall);
                break;
        default: break;
            }
            obstacle.scale = 0.2;
            obstacleGroup.add(obstacle);
    } 
}