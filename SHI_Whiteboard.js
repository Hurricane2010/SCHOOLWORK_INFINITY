window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    width = 3;
    dragTL=dragBL=dragTR=dragBR=false;
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
    }


    var touchX,touchY;

    function sketchpad_touchStart() {
        getTouchPos();
        drawDot(ctx,touchX,touchY,12);

        // Prevents an additional mousedown event being triggered
        event.preventDefault();
    }

    function sketchpad_touchMove(e) { 
        getTouchPos(e);
        if(!painting) return;
        ctx.lineWidth = width;
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

        drawDot(ctx,touchX,touchY,12); 
        event.preventDefault();
    }
    function getTouchPos(e) {
        if (!e)
            var e = event;

        if (e.touches) {
            if (e.touches.length == 1) {
                var touch = e.touches[0];
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
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