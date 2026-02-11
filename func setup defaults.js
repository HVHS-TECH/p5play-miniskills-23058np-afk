function setup() {
	cnvPadding = 12 //to remove scroll bars
	cnv = new Canvas(windowWidth-cnvPadding, windowHeight-cnvPadding); // use windowWidth so window can be resized
	// width = whatever x is for Canvas()
	
	console.log(width)
	try {
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
