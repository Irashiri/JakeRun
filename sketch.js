//variables

//variables
var jake;
var jake_image;
function preload(){
jake_image = loadImage("Jake1.png");

}

function setup(){
    createCanvas(600,200);

jake = createSprite(50,160,20,50);
jake.addImage(jake_image);
}

function draw(){
background("white");
drawSprites();
}