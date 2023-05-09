function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    let a = createA('next.html', 'enter');
    a.position(windowWidth/2-10, 500);
    a.style('font-size', '30px')
    a.style('color', 'white')
    // a.style('background-color', 'white')
    a.style('padding', '5px')
    a.class('a')
}

function draw () {

}

function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}