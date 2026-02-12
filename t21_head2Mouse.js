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
	cnvPadding = 12 
	windowWidthPadding = windowWidth-cnvPadding
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
	try {
		ball_1 = new Sprite(width/2, height/2, 50, 'd');
		ball_1.image = (imgFace);
		imgFace.resize(50, 50);

		if (mouse.presses()) {
		ball_1.moveTo(mouseX, mouseY, 10)
		return mouse.presses()
	}
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
	console.log (mouse.presses())
}

/*******************************************************/
//  END OF APP
/*******************************************************/