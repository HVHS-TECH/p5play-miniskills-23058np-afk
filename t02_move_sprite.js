/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
rectangleVelocity = 1

function setup() {
	
	cnv = new Canvas(windowWidth, windowHeight);
	rectangleSprite = new Sprite(windowWidth/2, 0, 100, 160);
	rectangleSprite.color = 'red';
	rectangleSprite.rotationSpeed = -5;
	rectangleSprite.vel.y = rectangleVelocity;
	

	console.log("setup: ");
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("light grey");
}

/*******************************************************/
//  END OF APP
/*******************************************************/