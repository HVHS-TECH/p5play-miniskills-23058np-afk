/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	rectangleSprite = new Sprite(windowWidth/2, 0, 100, 160, 'd'); //'d' lets it move dynamically, ie. is affected by gravity AND sprites. use 'k' for just code.
	rectangleSprite.color = 'red';
	rectangleSprite.rotationSpeed = -1;

	console.log("setup: it's in the stratosphere!");
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("black")
}

/*******************************************************/
//  END OF APP
/*******************************************************/