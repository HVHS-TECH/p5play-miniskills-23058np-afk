/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	
	world.gravity.y = 0
	cnvPadding = 12 
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
	try {
		ball_1 = new Sprite(width/2, height/2, 50, 'd');
		console.log("setup: success ");
	} catch (error) {
		console.log("setup: fail ");
	}

	//setting directions
	
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("grey");
	 // Set sprite's velocity to the left
	if(kb.pressing('left')){
		ball_1.x -= 5;
	}
	 // Set sprite's velocity to the right
	if (kb.pressing('right')) {
		ball_1.x += 5;
	} 
	if (kb.pressing('up')) {
		ball_1.y -= 5;	
	}
	if (kb.pressing('down')) {
		ball_1.y += 5;	
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/