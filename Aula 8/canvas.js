let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
var pessoa1={
    idade:34,
    nome: "Victor",
    altura: 1.74,
    estadoCivil:"Complicado",
    gritoDeGuerra: function(){
        alert("Meu nome é "+ this.nome + " eu tenho " + this.idade+ " anos")
    }
}

pessoa1.gritoDeGuerra();

//elemento rosa
let elemento = {
    x: 0,
    y: 200,
    raio:30,
    cor:"pink",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

//retangulo1
let retangulo = {
    x:0,
    y:0,
    largura:50,
    altura: 50,
    cor:"red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}
//retangulo2
let retangulo2 = {
    x:0,
    y:0,
    largura:50,
    altura: 50,
    cor:"blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}
//bola
let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'burro.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

//animacao dos 4 - a animação tem que ser tudo junto
let direction=1
function animacao(){
    ctx.clearRect(0,0,400,400)
    if(retangulo.x ==350){
        direction=-1
    }
    if(retangulo.x == 0){
        direction=1
    }
    retangulo.x = retangulo.x + direction*10;
    retangulo.desenha();

    retangulo2.y = retangulo2.y + direction*10;
    retangulo2.desenha();

    bola.desenha();
    elemento.desenha();

    requestAnimationFrame(animacao)

}
animacao();




//teclado
let ganho= 10;
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {elemento.y = elemento.y-1}  
    if(tecla == 'ArrowDown') {elemento.y = elemento.y+1}  
    if(tecla == 'ArrowLeft') {elemento.x = elemento.x-1}  
    if(tecla == 'ArrowRight'){elemento.x = elemento.x+1}  
})


document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;

    if(x_mouse >50 && x_mouse<350 && y_mouse>50 && y_mouse <350){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
      bola.x = bola.x;
        bola.y = bola.y
    }
})

