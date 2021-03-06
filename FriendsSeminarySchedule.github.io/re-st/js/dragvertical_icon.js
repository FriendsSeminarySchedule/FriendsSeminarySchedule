// JavaScript Document
// ***************************************************************************************

// VERTICAL DRAG MOUSE CONSTRUCTOR CLASS #01
// Caitlin Ironside
// 30 October 2017

// ***************************************************************************************

function dragMouse (initialX,initialY,x,y,size) {
    this.x = x;
    this.y = y;    
    this.upward = true;
    this.lerpSpeedY = 0.08;
    this.targetY; 
    this.initialX = initialX;
    this.initialY = initialY; 
    this.size = size; 
    this.circleOpacity = 0;
    this.strokeWeight = 1;
    
    this.display = function () {
        noStroke();
        imageMode(CENTER);
        image(img10,this.x,this.y,this.size,this.size);
        noFill();
        strokeWeight(this.strokeWeight);
        ellipseMode(CENTER);
        stroke(0,this.circleOpacity);
        ellipse(this.x,this.y,1.3*this.size,1.3*this.size);
    };
    
    this.move = function () {
        if (this.y > this.initialY -5) {
            this.upward = true; 
            this.lerpSpeedY = 0.08;
        }	else if (this.y < this.initialY -145) {
                this.upward = false;
                this.lerpSpeedY = 0.04;
            }
        if (this.upward) {
            this.targetY = this.initialY -150;
            this.circleOpacity = 0;
        }	else {
                this.targetY = this.initialY;
                this.circleOpacity = 255;    
            }
        this.y = lerp(this.y,this.targetY,this.lerpSpeedY);		  
    };  
}



    
    
  