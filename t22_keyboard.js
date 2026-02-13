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
		console.log("setup: success ");
	} catch (error) {
		console.log("setup: fail ");
	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	up = kb.pressing('up')
	down = kb.pressing('down')
	left = kb.pressing('left')
	left = Math.sign(kb.pressing('right'))
	console.log(left);



	background("grey");
	 // Set sprite's velocity to the left or right, depending on key pressed. 
	if (kb.pressing('left') || kb.pressing('right')) {
    //ballOne.vel.x += 
	(kb.pressing('right') - kb.pressing('left'))
	//just to be clear pulled this from chatgpt, as I knew you could do it 
	// this way but couldn't remeber how. It's broken right now, as it makes the sprite too fast,
	//but my intent is to use chatGPT to jog my memory. Nothing more.
}	console.log(kb.pressing("j"))
	if (kb.pressing('up')) {
		ballOne.vel.y -= 1;
	}
	if (kb.pressing('down')) {
		ballOne.vel.y += 1;
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/