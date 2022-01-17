window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    width = 3;

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variables
    let painting = false;
    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = width;
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        if (e.touches) {
            if (e.touches.length == 1) { // Only deal with one finger
                var touch = e.touches[0]; // Get the information for finger #1
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
                ctx.lineTo(e.touchX, e.touchY);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.touchX, e.touchY);
            }
        }
    }

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("touchend", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("touchmove", draw);


});


window.addEventListener('resize', () =>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

    //Button Functions
function lineWidthIncreaese(e){
    console.log("Line is decreasing!")
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    width = width + 1;
    draw(e)
    }
    
function lineWidthDecrease(e){
    console.log("Line is decreasing!")
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
        width = width - 1;
    draw(e)
}

function clearall(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function eraser(e){
    eraser = width + 10;
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.strokeWidth = eraser;
    ctx.strokeStyle = "white";
    draw(e);
}

function pen(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.strokeStyle = theColor;
    width = width;
}

function colorWheel(e){
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d");
    var theInput = document.getElementById("color");

    theInput.addEventListener("input", function(){
    theColor = theInput.value;
  
    ctx.strokeStyle = theColor;
    draw(e)
    }, false);
}


function Textbox(){
    const textbox = document.getElementById("mydiv")

    if(textbox.style.visibility == "hidden"){
        textbox.style.visibility = "visible";
        counter = counter + 1;
    }
    if(textbox.style.visibility == "visible"){
        textbox.style.visibility = "hidden";
    }
}



// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}