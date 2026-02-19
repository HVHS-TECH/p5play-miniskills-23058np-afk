
function setup(){
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    cnv = new Canvas(900,800);
    for (var i = 0; i < 11; i++) {
    spriteColor = color(255-20*i,255-20*i, 255-10*i);
        for (var g = 0; g < 11; g++) {
            var block = new Sprite(g*80 + 40, i*70+40, 50, 50);
            block.color = spriteColor;
            block.layer=-10
        }
    }
}
function draw(){
    background("cyan");
    textSize(32);
    allSprites.draw(); // 1. Draw sprites first
    text(`x: ${mouseX/10} y:${mouseY/10}`,50, 50,);
}
