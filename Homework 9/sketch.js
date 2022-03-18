function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(110,45,78);
    textSize(40)
    text("Hello", 100,190)
    // head
    fill(100, 210, 0);
    circle(300,150,185);
   
    // eyes
    strokeWeight(10);
    fill(10);
    point(260,120);
    point(340,120);

    // nose
    point(300,160);
    
    // mouth
    ellipse(300, 195, 10, 35)

    // hair
    line(550,100,100,20);
    // body
    fill(102, 85, 110);
    rect(200,260,190,140);
    
    // decoration
    fill(300);
    triangle(210,320,370,290,310,370)
    // right arm
    fill(220, 100, 170);
    rect(390,320,70,10);
    // left arm
    rect(120,320,70,10);
    // left leg
    rect(250,410,10,50);
    // right leg
    rect(330,410,10,50);
    
    fill(1450);
    textSize(30);
    text("YeonJoo Kim",390,500 );


}