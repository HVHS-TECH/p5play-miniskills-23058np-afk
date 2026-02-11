/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

	cnvPadding = 12 //to remove scroll bars
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding); // use windowWidth so window can be resized
	// width = whatever x is for Canvas()
	console.log(width)
	try {
		//left wall
		wallRH  = new Sprite(+4, height/2, 8, height, 'k');
		wallRH.color = "black"
		//right wall
		wallLH  = new Sprite(width-4, height/2, 8, height, 'k');
		wallLH.color = "black"
		//top wall
		wallTop = new Sprite(width/2,+4, width, 8,'k');
		wallTop.color = "black"
		//bottom wall
		wallTop = new Sprite(width/2,height-4, width, 8,'k');
		wallTop.color = "black"
		//ball one
		ballOne = new Sprite(width/2, height/2, 50, 'd');
		ballOne.color = 'cyan';
		ballOne.vel.x = 10;
		ballOne.vel.y = 10
		ballOne.bounciness = 1;
		ballOne.friction = 0;
		ballOne.drag = 0;
		//if everything works this should appear
		console.log("setup: success ");
	} catch (error) {
		//if it doesn't...
		console.log("setup: fail ");
	}
}

function draw() {
	background("RGB(190, 190, 190)")
}

/*******************************************************/
//  END OF APP
/*******************************************************/