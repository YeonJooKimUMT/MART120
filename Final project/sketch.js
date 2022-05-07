function setup() {
  createCanvas(600, 450);

}

function draw() {

  strokeWeight(0);
  
  let bg = 500 -(mouseX/300)*250;
  
  background(bg);
  

  if (mouseY<height/2) {
    background(150,200,350);
  }
  

  fill(250,mouseX/9,100);				
  ellipse(mouseX,100+pow(abs(width/2-mouseX)*0.03,2),160,160);	
  
  fill(255-bg);
  rect(0,400,width,80);
  
  rect(220,140,55,233);
  // rect(278,100,80,273); 
  rect(201,200,300,203);
  
  fill(200+mouseX/8,150+mouseX/10,360-mouseX/10)	
  
  rect(225,230,15,30);	
  rect(250,230,15,30);	
  rect(275,230,15,30);
  rect(300,230,15,30);	
  
}