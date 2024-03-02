function setup() { 
    createCanvas(600, 500,WEBGL);
} 
      
function draw() { 
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(100,50);
    //next i want to color this circle
}