/*******************************************************/
// P5.play: t23_text
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

        textAlign(CENTER, CENTER);
        world.gravity.y = 0
        cnvPadding = 12 
        cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
        try {
                ballOne = new Sprite(width/2, height/2, 50, 'd');
                ballOne.drag = 10
                console.log("setup: success ");
        } catch (error) {
                console.log("setup: fail ");
            }
        }
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
        background("grey");
        textSize(128);
        stroke(0);
        strokeWeight(2);
        fill('limegreen');
        //movement
        right = Math.min(kb.pressing('right'),1);
        left = Math.min(kb.pressing('left'),1);
        up = Math.min(kb.pressing('up'),1);
        down = Math.min(kb.pressing('down'),1);

        ballOne.vel.y += down - up;
        ballOne.vel.x += right - left;

        //time in seconds
        let seconds=nf(millis() / 1000,1,0);
        // degrees in seconds time 180
        let sine = 180*nf(millis() / 1000,1,10);
        // returns -1=<x=<1 every second
        let x = sin(sine);
        circle(250*x+width/2,height/2,50);
        text(seconds,width/2,height*0.8,);
        
        // the ball and the timer are off by varying amounts of 2 frames. I will blame p5 for that.
}
/*******************************************************/
//  END OF APP
/*******************************************************/