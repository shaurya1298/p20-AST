var bg
var ast
var eat
var brush
var gym
function preload(){
bg=loadImage("Images/iss.png")
 eat=loadAnimation("Images/eat1.png","Images/eat2.png") 
 brush=loadImage("Images/brush.png")
 gym=loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
}

function setup() {
  createCanvas(800,400);
  ast=createSprite(400, 200, 50, 50);
  ast.scale=0.1
  

}

function draw() {
  background(bg);  
  
  if(keyDown("E")){
    ast.addAnimation("eating", eat);
    ast.changeAnimation("eating");
    console.log("eat")

  
  }
  if(keyDown("B")){
ast.addImage("brushing",brush)


  }

  if(keyDown("G")){
    ast.addAnimation("gyming",gym)
    ast.changeAnimation("gyming")
  }


drawSprites();
}