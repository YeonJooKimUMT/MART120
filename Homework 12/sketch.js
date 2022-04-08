// x and y for my character
var characterX = 80;
var characterY = 50;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 90;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 500);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 9);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function draw()
{    background(200,45,78);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(30);
    text("EXIT", width-90,height-90)

    //character
    fill(50,40,123);
    circle(characterX,characterY,25);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // potential enemy
    fill(400,299,90);
    // draw the shape
    circle(shapeX, shapeY, 20);
    circle(shapeX, shapeY, 20);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(70);
        stroke(9);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(200,700,140);
    circle(mouseShapeX, mouseShapeY, 150);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 5;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 5;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 5;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 5;
    }
  }
  */