function setup() {
	cnvPadding = 12 
	windowWidthPadding = windowWidth-cnvPadding
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding);
	console.log(width)
	try {

		console.log("setup: success ");
	} catch (error) {

		console.log("setup: fail ");

	}

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("RGB(190, 190, 190)")
	textSize(32)
	text(`x: ${mouseX} y:${mouseY}`,50, 50,);
}