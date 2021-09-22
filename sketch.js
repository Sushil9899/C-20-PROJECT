var astrounaut,iss
var bathImg,brushImg,drinkImg,eatImg,gymImg,gymImg2,moveImg,sleepImg,issImg

function preload() {

  bathImg = loadAnimation("bath1.png","bath2.png")
  brushImg = loadImage("brush.png")
  drinkImg = loadAnimation("drink1.png","drink2.png")
  eatImg = loadAnimation("eat1.png","eat2.png")
  gymImg = loadAnimation("gym1.png","gym2.png")
  gymImg2 = loadAnimation("gym11.png","gym12.png")
  moveImg = loadAnimation("move.png")
  sleepImg = loadImage("sleep.png")
  issImg = loadImage("iss.png")
}

function setup() {
  
  createCanvas(1530,750)

  

  iss = createSprite(765,315)
  iss.addImage(issImg)
  iss.scale = 0.32

  astrounaut = createSprite(765,650)
  astrounaut.addAnimation("help",moveImg)
  astrounaut.scale= 0.2
 
  line = createSprite(750,550,200,20)
  line.shapeColor= "white"

}

function draw(){
background("lightblue")

edges = createEdgeSprites()
astrounaut.bounceOff(edges)



if(keyDown("B")){

  astrounaut.addAnimation("help",eatImg)
  astrounaut.velocityX = 2
  astrounaut.velocityY = -1
}

if(keyDown("V")){

  astrounaut.addAnimation("help",drinkImg)
  astrounaut.velocityX = 1
  astrounaut.velocityY = -0.5
}

if(keyDown("C")){

  astrounaut.addAnimation("help",brushImg)
  astrounaut.velocityX = 2
  astrounaut.velocityY = -1
 
}

if(keyDown("X")){

  astrounaut.addAnimation("help",bathImg)
  astrounaut.velocityX = 2
  astrounaut.velocityY = -1
}

if(keyWentUp("Z")){

  astrounaut.addAnimation("help",moveImg)
  astrounaut.velocityX = 2
  astrounaut.velocityY = -1

}

astrounaut.rotation = astrounaut.rotation +0.08

  drawSprites()

  

if(keyDown("M")){

  astrounaut.addAnimation("help",gymImg)
  astrounaut.velocityX = 0
  astrounaut.velocityY = 0
  astrounaut.x = 745
  astrounaut.y = 400
  astrounaut.scale = 0.2
 
 
}

/*if(keyDown("N")){

  astrounaut.addAnimation("help",gymImg2)
  astrounaut.velocityX = 0
  astrounaut.velocityY = 0
  astrounaut.x = 745
  astrounaut.y = 400
  
}*/
if(keyDown("S")){

  astrounaut.addAnimation("help",sleepImg)
  astrounaut.velocityX = 0
  astrounaut.velocityY = 0
  astrounaut.x = 745
  astrounaut.y = 400


}
}