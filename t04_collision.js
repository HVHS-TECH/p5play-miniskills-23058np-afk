/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	try {
		mySprite = new Sprite(windowWidth/2, 0, 80, 120, 's'); 
		mySprite.color = 'RGB(31, 112, 256)';
		mySprite.rotationSpeed = 2;
		mySprite.vel.x = 2;
		mySprite.drag = 2
		
		//platform_1
		platform_1 = new Sprite(400, 200, 100, 10, 'd');
		platform_1.rotation = 25
		platform_1.bounciness = 1.5
		platform_1.vel.x=2
		

		//platform_2
		platform_2 = new Sprite(820, 240, 100, 10, 'k');
		platform_2.rotation = -30
		platform_2.bounciness = 1
		platform_2.friction = 200
		//platform_3
		platform_3 = new Sprite(600, 600, 100, 10, 'k');
		platform_3.bounciness = 2
		console.log("setup:sucess ");
	} catch (error) {
		console.log("setup:fail ");

	}
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	textSize(32)
	background("RGB(256,256,256)");	
	text(`x: ${mouseX} y:${mouseY}`,50, 50,);//so i can easily find where to put things

}

/*******************************************************/
//  END OF APP
/*******************************************************/