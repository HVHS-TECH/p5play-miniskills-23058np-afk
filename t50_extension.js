/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/

function setup() {
	stroke(4)
    strokeWeight(4);
	cnvPadding = 12 
	world.gravity.y = 10
	cnv = new Canvas(400, windowHeight-cnvPadding,)
	try {
		ball = new Sprite(width/2, height/2, 25,'d')
		ball.color = "pink"
		ball.stroke = "red"
		console.log("setup: success ");
	} catch (error) {
		console.log("setup: fail ");

	}
}

function draw(){
	background("purple")
	if (ball.y>height) {
		ball.vel.y=-100
	}
	console.log(ball.vel.y)
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		ball.vel.y = 0
		ball.vel.y -=5;
		console.log("UP UP UP")
	}
}