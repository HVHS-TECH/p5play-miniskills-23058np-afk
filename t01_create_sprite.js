/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	cnv = new Canvas(windowWidth, windowHeight);
	rectangleSprite = new Sprite(windowWidth/2, windowHeight/2, 100, 160);
	rectangleSprite.color = 'red';

	circleSprite = new Sprite(windowWidth/2, windowHeight/1.9, 80);
	circleSprite.color = 'blue';
	console.log("setup: red rectangle, blue circle.	");

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('light grey'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/