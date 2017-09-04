document.addEventListener("DOMContentLoaded", function(){

  const canvas = document.getElementById('myCanvas');
    canvas.width = 500;
    canvas.height = 500;

  const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 500, 500);
    ctx.beginPath();

    ctx.arc(100, 100, 50, 0, 270, false);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();

});
