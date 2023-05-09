let input, button, result, question, submit, answer;

let colorInput = document.getElementById('color-input');

let c;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Do you want to change your perspective?');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('background-color', 'white')
    // result.style('padding', '20px, 20px')
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.size(200, 20);
    input.position(windowWidth/2-100, 280);
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    // button.style('margin', '20px');
    button.size(200, 20);
    button.style('text-align', 'center');
    button.style('font-family', 'blackcurrant-squash');
    button.id('submit');
    button.position(windowWidth/2-100, 300);
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

    
  }
  

  function draw() {
     
  }
  

  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}


function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '15px');
  answer1.style('margin', '0px');
  answer1.style('background-color', 'white')
  answer1.style('margin-top', '5px')
  answer1.style('text-align','center');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  Answer1.innerHTML = answers;

  if (answers == "yes"){
    Answer1.innerHTML = answers;
    window.location.replace("room.html");
  } else if (answers == "Yes"){
    Answer1.innerHTML = answers;
    window.location.replace("room.html");
  } else if (answers == "no"){
    Answer1.innerHTML = answers;
    window.location.replace("no.html");
  } else if (answers == "No"){
    Answer1.innerHTML = answers;
    window.location.replace("no.html");
  } else {
    Answer1.innerHTML = "yes or no answers only";
  }
}

