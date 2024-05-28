window.onload = function () {
    canvas = document.getElementById("creativeCoding");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
}

let x = 0;
let y = 0;
let incrementor = 2;

function square() {
    ctx.fillStyle = "green";
    ctx.fillRect(x, 10, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fillRect(10, y, 100, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(500, y, 100, 100);
}

function drawBoxxy() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Then we run the method of Square
    square();

    /*  x/y is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }

  while (y + incrementor > canvas.width || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  
    // Then we update the x and y variable by adding it to the incrementor variable
  
    x += incrementor;
    y += incrementor;
  }

  /* Lastly we set the Interval of the refresh of drawBoxxy so that
   we can slow it down and see the referesh */
  
  setInterval(drawBoxxy, 10);