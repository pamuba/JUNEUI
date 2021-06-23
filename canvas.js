var canvas = document.getElementById("canvas")
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");

//Rect
// c.fillStyle = 'rgba(255,0,0,.9)'
// c.fillRect(100,100,100,100)

// c.fillStyle = 'rgba(0,0,255,.5)'
// c.fillRect(200,200,100,100)

// c.fillStyle = 'rgba(0,255,0,.9)'
// c.fillRect(300,300,100,100)

//lines
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = 'red'
// c.stroke();

// c.beginPath();
// c.moveTo(200,400);
// c.lineTo(350,100);
// c.strokeStyle = 'red'
// c.stroke();

//arc
// for (let i = 0; i < 300; i++) {
    
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y, 30, 0, Math.PI*2, true)
//     c.strokeStyle = "red";
//     c.fillStyle = "#"+i*3;
//     c.stroke();
//     c.fill();
    
// }

//bouncing ball




var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random()-0.5) * 10;
var dy = (Math.random()-0.5) * 10;
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);  

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fillStyle = "gold";
  c.strokeStyle = "green";
  c.fill();
  c.stroke();
  
  if(x+radius > innerWidth || x-radius < 0){
      dx = -dx;
  }
  
  if(y+radius > innerHeight || y-radius < 0){
    dy = -dy;
  }
  x+=dx;
  y+=dy

}
animate();
