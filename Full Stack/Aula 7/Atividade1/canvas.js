
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



//retângulo casa
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(110,110,85,130);
ctx.closePath();
//retângulo cinza
ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.fillRect(0,220,300,80);
ctx.closePath();
//retângulo porta
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(145,180,20,40);
ctx.closePath();
//quadrado janela1
ctx.beginPath();
ctx.fillStyle = 'lightblue';
ctx.fillRect(120,155,25,25);
ctx.closePath();
//quadrado janela2
ctx.beginPath();
ctx.fillStyle = 'lightblue';
ctx.fillRect(165,155,25,25);
ctx.closePath();
//sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(245,70,35,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.closePath();
//retangulo azul vertical
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,187,40,100);
ctx.closePath();
//retangulo azul horizontal
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,250,100,50);
//circulo azul vertical
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(-10,187,50,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.closePath();
//circulo azul horizontal
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(90,299.7,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

//retangulo árvore1
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(50,170,20,50);
//folha arvore2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(61,157,25,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.closePath();

//retangulo árvore2
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(250,215,20,50);
//folha arvore2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(259,199,25,1.5*Math.PI,3.5*Math.PI,);
ctx.fill();
ctx.closePath();

//triangulo
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(110,110);
ctx.lineTo(150,50);
ctx.lineTo(195,110);
ctx.fill();
ctx.closePath();

//x:110,y:110,l:85,h:130