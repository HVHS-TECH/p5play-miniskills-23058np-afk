/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {

  imgBG   = loadImage('../assets/images/space.jpg');

  imgFace = loadImage('../assets/images/face.png');

}
function setup() {
	cnvPadding = 12 
	windowWidthPadding = windowWidth-cnvPadding
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
	console.log(width)
	try {
		ball_1 = new Sprite(width/2, height/2, 50, 'd');
		ball_1.bounciness = 1;
		ball_1.friction   = 0;
		ball_1.image = (imgFace);
		imgFace.resize(50, 50);
		console.log("setup: success ");
	} catch (error) {

		console.log("setup: fail ");

	}

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG)
	textSize(32)
	text(`x: ${mouseX} y:${mouseY}`,50, 50,);
}

/*******************************************************/
//  END OF APP
/*******************************************************/