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
        ctx.strokeStyle="#FDFEFE";

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
    ctx.strokeStyle = "#212121";
    ctx.strokeWidth = eraser;
    draw(e);
}

function pen(){
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000"
    width = width;
}

function colorWheel(e){
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d");
    var theInput = document.getElementById("color");

    theInput.addEventListener("input", function(){
    var theColor = theInput.value;
  
    ctx.strokeStyle = theColor;
    draw(e)
    }, false);
}

// function selector(){
//     var canvas = document.getElementById('canvas'),
//         ctx = canvas.getContext("2d");
//     const image = {
//             image: new Image(),
//             x: canvas.width / 2 - image.width / 2, // centered in canvas
//             y: canvas.height / 2 - image.height / 2 // centered in canvas
//         };
        
//     image.image.src = ' <url> ';
//     const canvas = new Canvas('my-canvas', 500, 500).start();

//     canvas.on('draw', function ( renderer ) {
//         renderer.drawImage(image.image, image.x, image.y);
//     });
//     const pointer = new Pointer( canvas.element );

//     let moveImage = false;

//     pointer.on('move', function ( event ) {
//         if( moveImage ) {
//             image.x += (event.x - pointer.getMoveHistory(-2).x);
//             image.y += (event.y - pointer.getMoveHistory(-2).y);
//         }
//     });
//     pointer.on('down', function () {
//         moveImage = pointer.touches({ x: image.x, y: image.y, width: image.image.width, height: image.image.height });
//     });
//     pointer.on('up', function () {
//         moveImage = false;
//     });  
// }


