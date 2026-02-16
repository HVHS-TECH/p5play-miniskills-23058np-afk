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
		ballOne = new Sprite(width/2, height/2, 50, 'd');
		ballOne.drag = 10
		ballOne.color = 'pink';
		ballOne.stroke = 'red';		
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
	right = Math.min(kb.pressing('right'),1);
	left = Math.min(kb.pressing('left'),1);
	up = Math.min(kb.pressing('up'),1);
	down = Math.min(kb.pressing('down'),1);

	ballOne.vel.y += down - up
	ballOne.vel.x += right - left
}
/*******************************************************/
//  END OF APP
/*******************************************************/