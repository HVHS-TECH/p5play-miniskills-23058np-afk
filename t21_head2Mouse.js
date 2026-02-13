/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

}
function setup() {
	world.gravity.y = 10
 	cnvPadding = 12 
	windowWidthPadding = windowWidth-cnvPadding
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
	try {
		ball_1 = new Sprite(width/2, height/2, 50, 'd');
		ball_1.image = (imgFace);
		imgFace.resize(50, 50);
		console.log("setup: success ");
	} catch (error) {

		console.log("setup: fail ");

	}

}
function draw() {
	background(imgBG)
	textSize(32)
	text(`x: ${mouseX} y:${mouseY}`,50, 50,);
	ball_1.moveTowards(mouseX, mouseY, 0.1);
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/