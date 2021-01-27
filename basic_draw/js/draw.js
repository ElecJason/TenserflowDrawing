let textHere = document.getElementById('textHere');// display data

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

canvas1.style.zIndex = 2;
canvas1.width = screen.width;
canvas1.height = screen.height;
canvas1.style.zIndex = 2;
ctx1.translate(screen.width, 0); // flip screen horizontal
ctx1.scale(-1, 1); // flip screen horizontal

ctx1.lineJoin = 'round';
ctx1.lineCap = 'round';
ctx1.lineWidth = 5;
ctx1.strokeStyle = 'red';

let isDrawing = false;
let letsClear = false;
let lastX = 0;
let lastY = 0;
var newcolor = 'blue';

const clearDrawing =() => {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
}

canvas2.addEventListener('mousedown', () => isDrawing = true);
canvas2.addEventListener('mouseup', () => isDrawing = false);
canvas2.addEventListener('onmousehold', () => letsClear = true);

function drawPosenet(XY) {
  //XY = object   { x: value, y: value }
  textHere.innerHTML= Math.floor(XY.x) + " Eyes " + Math.floor(XY.y);
  
  document.body.onkeyup = function(e){
  		if(e.keyCode == 27){
        clearDrawing();
    	}else if(e.keyCode == 87){
    		ctx1.beginPath(XY.x, XY.y);
    		ctx1.arc(lastX, lastY, 50, 0, 2 * Math.PI);
    		ctx1.stroke();
    	}else if(e.keyCode == 81){
    		ctx1.beginPath(XY.x, XY.y);
    		ctx1.rect(lastX, lastY, 100,100);
    		ctx1.stroke();
    	}
   	}

  // stop the function if not mouse down
  if(!isDrawing){
  	[lastX, lastY] = [XY.x, XY.y];
  	return;
  }

  ctx1.beginPath(XY.x, XY.y);
  //ctx1.moveTo(lastX, lastY);
  ctx1.moveTo(lastX, lastY);
  ctx1.strokeStyle = "rgba(100,0,0,1.0";
  ctx1.lineTo(XY.x,XY.y);

  ctx1.stroke();
  [lastX, lastY] = [XY.x, XY.y];
}

