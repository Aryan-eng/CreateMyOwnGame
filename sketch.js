var canvas, backgroundImage;
var taximan;
var carObstacle;
var pigeonObstacle;
var taximanImage;
var carObstacleImage;
var pigeonObstacleImage;
var backgroundImage;
var downImage;
var rightImage;
var leftImage;
var database;
var ghost;
var form;
var edges;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32;
var wall33, wall34, wall35, wall36, wall36, wll37, wall38, wall39, wall40;
var wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49;
var wall50, wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60, wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70, wall71, wall72;
var ghostGroup;
var target;
var wallGroup;
var distance;
var oldDistance;
var score;
var cpGroup;
function preload(){
  taximanImage=loadImage("images/up.png");
backgroundImage=loadImage("images/mazeImage.png");
carObstacleImage=loadImage("images/carObstacle.png");
pigeonObstacleImage=loadImage("images/pigeonObstacle.jpg");
rightImage=loadImage("images/right.png");
leftImage=loadImage("images/left.png");
downImage=loadImage("images/down.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight);
  edges=createEdgeSprites();
  taximan=createSprite(displayWidth/2+40, displayHeight-10);
  taximan.scale=0.4;
  taximan.addImage("taxiImage", taximanImage);
  wallGroup=new Group();
  wall1=createSprite(displayWidth/2, displayHeight-40,25,150);
  wall1.shapeColor="green";

  wall2=createSprite(displayWidth/2+95, displayHeight-40, 25, 75);
  wall2.shapeColor="green";
  wall3=createSprite(1050, 967, 350, 10);
  wall3.shapeColor="green";
  wall4=createSprite(860, 997, 25, 75);
  wall4.shapeColor="green";
  wall5=createSprite(800, 1022 , 100, 10);
  wall5.shapeColor="green";
  wall6=createSprite(1137, 1000 , 25, 75);
  wall6.shapeColor="green";
  wall7=createSprite(1250, 1019 , 200, 10);
  wall7.shapeColor="green";
  wall8=createSprite(1325, 942 , 25, 175);
  wall8.shapeColor="green";
  wall9=createSprite(1380, 862 , 95, 25);
  wall9.shapeColor="green";
  wall10=createSprite(1420, 764 , 10, 220);
  wall10.shapeColor="green";
  wall11=createSprite(1455, 651 , 150, 15);
  wall11.shapeColor="green";
  wall12=createSprite(1462, 809 , 90, 10);
  wall12.shapeColor="green";
  wall13=createSprite(1149, 913 , 330, 10);
  wall13.shapeColor="green";
  wall14=createSprite(1136, 852 , 25, 125);
  wall14.shapeColor="green";
  wall15=createSprite(1195, 809 , 100, 10);
  wall15.shapeColor="green";
  wall16=createSprite(1235, 841, 25, 50);
  wall16.shapeColor="green";
  wall17=createSprite(1497, 1074 , 825, 10);
 wall17.shapeColor="green";
  wall18=createSprite(1620, 755 , 200, 10);
  wall18.shapeColor="green";
  wall19=createSprite(1605, 816, 25, 100);
  wall19.shapeColor="green";
  wall20=createSprite(1626, 861 , 200, 10);
  wall20.shapeColor="green";
  wall21=createSprite(1530, 892 , 25, 50);
  wall21.shapeColor="green";
   wall22=createSprite(1482, 915 , 75, 10);
  wall22.shapeColor="green";
 wall23=createSprite(1420, 994 , 25,200);
 wall23.shapeColor="green";
 wall24=createSprite(1514, 726 , 25, 50);
 wall24.shapeColor="green";
 wall25=createSprite(1660, 702 , 250, 10);
 wall25.shapeColor="green";
 wall26=createSprite(1800, 737 , 20, 250);
 wall26.shapeColor="green";
 wall27=createSprite(1761, 808 , 75, 10);
 wall27.shapeColor="green";
 wall28=createSprite(1671, 915 , 125, 10);
 wall28.shapeColor="green";
 wall29=createSprite(1707, 891 , 25, 50);
 wall29.shapeColor="green"; 
 wall30=createSprite(1707, 891 , 25, 50);
 wall30.shapeColor="green";
 wall31=createSprite(1616, 946 , 25, 50);
 wall31.shapeColor="green";
 wall32=createSprite(1510, 1025, 25, 125);
 wall32.shapeColor="green";
 wall33=createSprite(1677, 1020 , 100, 10);
 wall33.shapeColor="green";
 wall32=createSprite(1711, 933 , 25, 125);
 wall32.shapeColor="green";
 wall33=createSprite(1523, 620 , 25, 50);
 wall33.shapeColor="green";
 wall34=createSprite(1403, 599 , 290, 10);
 wall34.shapeColor="green";
 wall35=createSprite(1330, 630 , 25, 50);
 wall35.shapeColor="green";
 wall36=createSprite(1610, 598 , 25, 125);
 wall36.shapeColor="green";
 wall37=createSprite(1670, 650 , 75, 15);
 wall37.shapeColor="green";
 wall38=createSprite(1333, 703 , 150, 10);
 wall38.shapeColor="green";
 wall39=createSprite(1237, 755 , 150, 10);
 wall39.shapeColor="green";
 wall40=createSprite(1230, 730 , 25, 50);
 wall40.shapeColor="green";
 wall41=createSprite(1106, 703 , 100, 20);
 wall41.shapeColor="green";
 wall42=createSprite(1199, 650 , 100, 15);
 wall42.shapeColor="green";
 wall43=createSprite(1140, 620 , 25, 175);
 wall43.shapeColor="green";
 wall44=createSprite(1045, 491 , 25, 450);
 wall44.shapeColor="green";
 wall45=createSprite(1565, 544 , 75, 10);
 wall45.shapeColor="green";
 wall46=createSprite(1520, 515, 25, 50);
 wall46.shapeColor="green";
 wall47=createSprite(1237, 542 , 200, 10);
 wall47.shapeColor="green";
 wall48=createSprite(1381, 491 , 100, 15);
 wall48.shapeColor="green";
  wall49=createSprite(1425, 523 , 25, 200);
 wall49.shapeColor="green";
 wall50=createSprite(1522, 438 , 175, 15);
 wall50.shapeColor="green";
 wall51=createSprite(1665, 492 , 75, 15);
 wall51.shapeColor="green";
score=0;
cpGroup= new Group();
 target=createSprite(928, 14, 20, 20);
 target.shapeColor="red";
 distance=taximan.y-target.y;
//these ghosts
ghostGroup=new Group();
 
for(var w=1; w<=51; w++){
  var name='wall';
  wallGroup.add(eval(name+w));
}
console.log(wallGroup);
 //for()

 taximan.debug=true;

 console.log(Math.sqrt(25));

 oldDistance=Math.sqrt(Math.pow((taximan.x-target.x), 2)  +  Math.pow((taximan.y-target.y), 2));
}


function draw(){
 background("yellow");
if(keyDown ("UP_ARROW")){
  taximan.velocityY=-5;
  taximan.velocityX=0;
  taximan.addImage("taxiImage", taximanImage);
  taximan.setCollider("rectangle", 0,0,10,100);
}

if(keyDown ("DOWN_ARROW")){
  taximan.velocityY= +5;
  taximan.velocityX=0;
  taximan.addImage("taxiImage", downImage);
}

if(keyDown ("LEFT_ARROW")){
  taximan.velocityX= -5;
  taximan.velocityY= 0;
  taximan.addImage("taxiImage", leftImage);
}

if(keyDown("RIGHT_ARROW")){
  taximan.velocityX=5;
taximan.velocityY= 0;
  taximan.addImage("taxiImage", rightImage);
  taximan.setCollider("rectangle", 0,0,100,10);
}

fill("lightgreen");
 text(mouseX+","+mouseY,mouseX, mouseY);

 ghostGroup.bounceOff(edges[0]);
 ghostGroup.bounceOff(edges[1]);
 ghostGroup.bounceOff(edges[2]);
 ghostGroup.bounceOff(edges[3]);



//console.log("distance"+distance);
//console.log(taximan.y);
//console.log(target.y);
  
taximan.collide(wallGroup);

if(taximan.isTouching(ghostGroup)){
  resetTaximan();
}
spawnGhosts();

if(taximan.velocityX!==0 || taximan.velocityY!==0){
distance=Math.sqrt(Math.pow((taximan.x-target.x), 2)  +  Math.pow((taximan.y-target.y), 2));
if(distance>oldDistance){
  score--;
}
else{
  score++;
}
oldDistance=distance;
}

textSize(20);
text("Score: "+ score, 100,100);


if(taximan.isTouching(cpGroup)){
  score+=50;
}
spawnCheckpoint();

 drawSprites();
}

function spawnGhosts(){
 
    if(frameCount%150===0){
    ghost=createSprite(random(100, 1700), random(100, 900), 10, 10);
    ghost.shapeColor="blue";
    ghostGroup.add(ghost);
    //console.log(ghost.x);
    if(Math.round(ghost.x)%2===0){
      ghost.velocityX=5;
    }
    else{
     ghost.velocityY=5;
    }


  }

   }


 function resetTaximan (){
   taximan.x=displayWidth/2+40;
   taximan.y=displayHeight-10;
   taximan.addImage("taxiImage", taximanImage);
   taximan.velocityX=0;
   taximan.velocityY=0;
 }

 function spawnCheckpoint (){
  if(frameCount%400===0){
   var cp=createSprite(taximan.x+Math.random(100,200), taximan.y+Math.random(90, 150), 25, 25);
   cp.shapeColor="purple";
   cp.lifetime=50;
  cpGroup.add(cp);
 }
}
