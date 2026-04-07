
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//quadrado azul
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();
//quadrado vermelho
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();
//retangulo amarelo vertical
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,250,25,50);
ctx.closePath();
//retangulo amarelo horizontal
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,275,50,50);
ctx.closePath();
//retangulo preto vertical
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(275,250,25,50);
ctx.closePath();
//retangulo preto vertical
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(250,275,25,50);
ctx.closePath();
//meio circulo grande
ctx.beginPath();
ctx.fillStyle = 'aquamarine';
ctx.arc(137.5,299,25,1*Math.PI,0*Math.PI);
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.fill();


//linha azul
ctx.beginPath();
// Set a start-point
ctx.moveTo(250,50);
// Set an end-point
ctx.lineTo(135.5,135.5);
ctx.fillStyle = 'blue';
// Draw it
ctx.stroke();

//linha vermelha
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(50,50);
ctx.lineTo(135.5,135.5);
ctx.stroke();

//linha cinza
ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.moveTo(50,50);
ctx.lineTo(90,90);
ctx.stroke();