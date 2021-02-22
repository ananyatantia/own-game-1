var heart , circle , rectangle , square , spairal, heartimg , circleimg , rectangleimg , squareimg , spairalimg , line,lineimg

function preload(){
  heartimg  = loadImage("images/heart.png")
  lineimg  = loadImage("images/line.png")
  circleimg = loadImage("images/circle.png")
  rectangleimg = loadImage("images/rectangle.png")
  squareimg = loadImage("images/square.jpg")


}
function setup() {
  heart = createSprite(200,100,100,100)
  heart.addImage(heartimg)
  heart.scale = 0.6
line = createSprite(500,100,100,100)
  line.addImage(lineimg)
 line.scale = 0.2
  square = createSprite(400,100,100,100)
  square.addImage(squareimg)
  square.scale = 0.4
  rectangle = createSprite(300,100,100,100)
  rectangle.addImage(rectangleimg)
  rectangle.scale = 0.4
  circle = createSprite(100,100,100,100)
circle.addImage(circleimg)
circle.scale = 0.1
 
  createCanvas(1000,1000);
 
}

function draw() {
  background("black");  
  drawSprites();

}