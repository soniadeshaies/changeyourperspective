let mode = 1;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {

    if (mode == 1){
      displayCat();
    }

    cat.mousePressed(bear);
    
    mode = 2

    if (mode == 2){
      removeElements();
      background(0);
      bear.style.display='none';
    }
   
    
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function displayCat() {
  let cat = createImg("img/room2.png");
  let eye = createImg("img/closed-eye.png");
  let text = createImg("img/text.png");

    cat.size(windowWidth, windowHeight);
    cat.position(0,0);
    cat.id('cat');

    // eye.size(400,200);
    eye.position(windowWidth/2-236, 400);
    eye.id('eye');
    eye.class('eye');
    eye.mousePressed(bear);

    text.position(windowWidth/2-500,100);
    text.size(1000,200);
}

function bear(){
  let bear = createImg("img/yas.gif");
  let eyes = createImg("img/open-eye2.png")
  
  bear.size(windowWidth, windowHeight);
  bear.position(0,0);

  eyes.position(windowWidth/2-269.5, 250);
  eyes.id('eyes');
  eyes.class('eyes');

let a = createA('flower.html', 'continue to the flower garden >>');
a.position(windowWidth-200, 650);
a.style('font-size', '15px')
a.style('color', 'white')
a.style('background-color', 'black')
a.style('padding', '5px')
a.class('a')
  
  // eyes.mousePressed(bear);
}
