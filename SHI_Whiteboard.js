window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    width = 3

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

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);


});


window.addEventListener('resize', () =>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

    //Button Functions
function lineWidthIncreaese(e){
    if(eraser == true){
        width = width - 10;
    }
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
    if(eraser == true){
        width = width - 11;
    }
    else{
        width = width - 1;
    }

    draw(e)
}

function clearall(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function eraser(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FDFEFE";
    width = width + 10;
    eraser = true;
}

function pen(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000"
    width = width;
}




