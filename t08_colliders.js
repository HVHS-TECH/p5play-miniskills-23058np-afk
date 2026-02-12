/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	world.gravity.y = 30
	cnvPadding = 12 //to remove scroll bars
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding); // use windowWidth so window can be resized
	// width = whatever x is for Canvas()
	console.log(width)
	try {
		//left wall
		wallRH  = new Sprite(+4, height/2, 8, height, 'k');
		wallRH.color = "yellow"
		//right wall
		wallLH  = new Sprite(width-4, height/2, 8, height, 'k');
		wallLH.color = "blue"
		//top wall
		wallTop = new Sprite(width/2,+4, width, 8,'k');
		wallTop.color = "red"
		//bottom wall
		wallTop = new Sprite(width/2,height-4, width, 8,'k');
		wallTop.color = "green"
		//ball one
		ballOne = new Sprite(width/2, height/2, 50, 'd');
		ballOne.colour = 'cyan';
		ballOne.vel.x = random(100,-100);
		ballOne.vel.y = 20;
		ballOne.bounciness = 1;
		ballOne.friction = 0;
		ballOne.drag = 0;
		//aliens group
		alienGroup = new Group();
		//aliens fucntion
		function makeAliens() {
			alien = new Sprite(random(0,width), random(0,height),random(15,30),random(5,30), 'd'); // random() can only be used after func setup( is called)
			const VELARRAY = [-1, 1];
			randNum = random(1, 15) * random(VELARRAY);
			alien.vel.x = randNum;
			alien.vel.y = randNum;
			alien.bounciness = 1;
			alien.friction = 0;
			alienGroup.add(alien);
		}
		for (i = 0; i < 200; i++) {
			makeAliens();
		} 
		// alien ball collision + giving the ball velocity + flipping gravity
		alienGroup.collides(ballOne, func2Call);
		function func2Call(_ssss, ballOne) {
			// Delete the alien which was hit
			ballOne.vel.x = ballOne.vel.x +random(100,-100);
			world.gravity.y = world.gravity.y*-random(1,1);
			console.log(world.gravity.y);
			_ssss.remove();
		}
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