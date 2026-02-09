/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	try {
		cnv = new Canvas(windowWidth, windowHeight);
		world.gravity.y = 10;
		world.gravity.x = 2
		
		rectangleSprite = new Sprite(windowWidth/2, 0, 80, 120, 'd'); //'d' lets it move dynamically, ie. is affected by gravity AND sprites. use 'k' for just code.
		rectangleSprite.color = 'red';
		rectangleSprite.rotationSpeed = -1;
		rectangleSprite.vel.y = -3;
		

		cubeSprite = new Sprite(windowWidth/2 + 300, 0, 50, 50, 'n')
		cubeSprite.color = 'blue';
		cubeSprite.rotationSpeed = -5;
		cubeSprite.vel.x = -5;

		circleSprite = new Sprite(windowWidth/2 - 300, 100, 80, 'k')
		circleSprite.color = 'green';
		circleSprite.rotationSpeed = 13;
		circleSprite.vel.x = 6;

		console.log("red goes up, green goes right, blue goes left, and they are all pulled down. exept green. and blue. blue figured out the meaning to life.");
	} catch (error) {
		console.log("something is wrong")
	}
	
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