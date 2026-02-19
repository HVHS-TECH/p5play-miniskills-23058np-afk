function setup(){
    cnv = new Canvas(900,800)
    for (var i = 0; i < 11; i++) {
    var block = new Sprite(450, i*70+40, 500-i*50, 50);
    block.color = color(255, 0, 0); // Red color
    
    }
}

function draw(){
    background("cyan")
    

}