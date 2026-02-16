/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/
function preload(){
	bgImg = loadImage('../assets/images/sea.jpg');
	boatImg = loadImage('../assets/images/boat.png');
}
function setup() {
	cnvPadding = 12 
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding, "pixelated x4");
	boatImg.resize(100, 60);

	try {
		boat = new Sprite(width/2,height/2,100,60);
		boat.image = (boatImg);
		
		boat.drag = 20
		console.log("setup: success ");
	} catch (error) {

		console.log("setup: fail ");

	}

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(bgImg)
	textSize(32)
	text(`x: ${mouseX} y:${mouseY}`,50, 50,);
	right = Math.min(kb.pressing('right'),1);
	left = Math.min(kb.pressing('left'),1);
	up = Math.min(kb.pressing('up'),1);
	down = Math.min(kb.pressing('down'),1);
	//gives boat velocity based of the result of both movement keys being pressed
	boat.vel.y += down - up;
	boat.vel.x += right - left;
	//faces right
	if (kb.pressing('right')){
		boat.scale.x = -1
	}
		if (kb.pressing('left')){
		boat.scale.x = 1
	}
	
}