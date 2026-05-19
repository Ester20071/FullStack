let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// Tamanho do canvas
const CANVAS_W = 300;
const CANVAS_H = 300;

// Imagem controlada pelo mouse
let img = new Image();
img.src = 'burro.jpg'; // substitua pelo nome da sua imagem

let imgLargura = 60;  // largura da imagem
let imgAltura = 60;   // altura da imagem

// centro do canvas
let imgX = CANVAS_W / 2;
let imgY = CANVAS_H / 2;

function animacao() {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Desenha a imagem centralizada na posição atual
    // imgX e imgY representam o CENTRO da imagem
    ctx.drawImage(
        img,
        imgX - imgLargura / 2,  // centraliza horizontalmente
        imgY - imgAltura / 2,   // centraliza verticalmente
        imgLargura,
        imgAltura
    );

    requestAnimationFrame(animacao);
}

// Inicia a animação 
img.onload = function () {
    animacao();
};

img.onerror = function () {
    animacao();
};

// Controle do mouse 
document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = evento.clientX - rect.left;
    let mouseY = evento.clientY - rect.top;

    //  mouse dentro do canvas
    if (mouseX >= 0 && mouseX <= CANVAS_W && mouseY >= 0 && mouseY <= CANVAS_H) {
        // imagem distancia
        let metadeLargura = imgLargura / 2;
        let metadeAltura = imgAltura / 2;

        imgX = Math.max(metadeLargura, Math.min(mouseX, CANVAS_W - metadeLargura));
        imgY = Math.max(metadeAltura, Math.min(mouseY, CANVAS_H - metadeAltura));
    }
    // para a imagem nunca desaparecer
});
