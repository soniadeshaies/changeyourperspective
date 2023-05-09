let input, button, result, question, submit, answer;

let colorInput = document.getElementById('color-input');

let c;

var meldingen = 0;

  function setup() {
      let cnv = createCanvas(windowWidth, windowHeight);
      cnv.parent('mySketch');
      
  }

    function draw() {
      mode = 1
      if (mode == 1) {
        displayAlert ();
      }
      
      mode = 2

      if (mode == 2) {
        alert.style.display='none';

        displayButton ();
      }
    }

    function displayAlert () {
      alert("People who don’t change their perspectives are boring");
      alert("YOU are boring");
      alert("You can't avoid the truth");
    // alert("how embarrassing mr. i don't want to change my perspective");
      alert("aren’t you embarrassed?");
    // alert("i'm not going away until you admit to yourself that you're boring or until you change your mind");
      alert("you really should change your mind");
      alert("i'll give you one more chance, don't let me down");
    
    background ('#d00000');

    result = createElement('p', 'Now do you want to change your perspective???');
    result.style('color', 'white');
    result.style ('background-color', 'black')
    result.style ('padding-bottom', '1px')
    result.style('font-size', '30px');
    result.style('margin', '10px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    button.style('color', 'white');
    button.style('font-family', 'blackcurrant-squash');
    button.style ('background-color', 'black');

    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);
    }

    function displayButton () {
      
    }
  
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
  }
  
  
  function output() {
    const answers = input.value();
    input.value('');
  
    let answer1 = createP('');
    answer1.id('answer-1')
    answer1.style('font-size', '15px');
    answer1.style('margin', '0px')
    answer1.style('color', 'white');
    answer1.style('background-color', 'black')
    answer1.style('margin-top', '5px')
  
    let Answer1 = document.getElementById('answer-1');
    colorInput.appendChild(Answer1);
    Answer1.innerHTML = answers;
  
    if (answers == "yes"){
      Answer1.innerHTML = answers;
      window.location.replace("room.html");
    } else if (answers == "Yes"){
      Answer1.innerHTML = answers;
      window.location.replace("room.html");
    } else {
      Answer1.innerHTML = "girl please what did i tell you?!! you MUST say yes";
    }
  }
  
  