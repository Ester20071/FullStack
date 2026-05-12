
const canvas = document.getElementById('meuCanvas');
const ctx    = canvas.getContext('2d');
    function desenhar_quadrado(x, y, w, h, cor) {
      ctx.fillStyle = cor;
      ctx.fillRect(x, y, w, h);
    }

    function desenhar_linha(x1, y1, x2, y2, cor, espessura) {
      espessura = espessura || 1;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = cor;
      ctx.lineWidth   = espessura;
      ctx.stroke();
    }

    function desenhar_arco(x, y, raio, inicio, fim, cor, preenchido, antiHorario) {
      preenchido  = preenchido  || false;
      antiHorario = antiHorario || false;
      ctx.beginPath();
      ctx.arc(x, y, raio, inicio, fim, antiHorario);
      if (preenchido) {
        ctx.fillStyle = cor;
        ctx.fill();
      } else {
        ctx.strokeStyle = cor;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
      }
    }

    function escrever(texto, x, y, cor, tamanho) {
      tamanho = tamanho || 18;
      ctx.fillStyle = cor;
      ctx.font      = tamanho + 'px Arial';
      ctx.fillText(texto, x, y);
    }

    /*Base*/
    const W  = 300;
    const H  = 300;
    const CX = 150;
    const CY = 150;

    // Fundo branco
    desenhar_quadrado(0, 0, W, H, 'white');

    // Linha horizontal verde 
    desenhar_linha(0, CY, W, CY, 'green', 1.5);

    // QUADRANTE SUPERIOR

    // Quadado azul
    desenhar_quadrado(0, 0, 46, 40, 'blue');

    // Quadrado vermelho 
    desenhar_quadrado(254, 0, 46, 40, 'red');

    // Diagonal azul
    desenhar_linha(46, 40, CX, CY, 'blue', 1.2);

    // Diagonal vermelha
    desenhar_linha(254, 40, CX, CY, 'red', 1.2);

    //  Arco verde 1
    desenhar_arco(CX, CY, 88, Math.PI, Math.PI * 1.5, '#00aa00');

    // Arco verde 2
    desenhar_arco(CX, CY, 88, Math.PI * 1.5, 0, '#00aa00');

    // Arco verde interno 1
    desenhar_arco(CX, CY, 62, Math.PI, Math.PI * 1.5, '#00aa00');

    // Arco verde interno 2
    desenhar_arco(CX, CY, 62, Math.PI * 1.5, 0, '#00aa00');

    // Bola verde agua 
    desenhar_arco(CX, CY - 33, 13, 0, Math.PI * 2, 'cyan', true);
    // Contorno azul escuro
    desenhar_arco(CX, CY - 33, 13, 0, Math.PI * 2, '#00008B', false);

    // Quadrados verde agua laterais centrados na linha horizontal
    desenhar_quadrado(0, 127, 26, 46, 'cyan');
    desenhar_quadrado(274, 127, 26, 46, 'cyan');

    //  QUADRANTE INFERIOR

    // Linha vertical preta 
    desenhar_linha(CX, CY, CX, H - 55, 'black', 1.5);

    //  Semicírculo verde agua  
    desenhar_arco(CX, H, 55, Math.PI, 0, 'cyan', true);

    //  Arco de linha verde
    desenhar_arco(CX, H, 55, Math.PI, 0, '#00aa00', false);

    //  Arco azul interno (raio 75) 
    desenhar_arco(CX, H, 75, Math.PI, 0, 'blue', false);
    //  Arco azul (raio 95)
    desenhar_arco(CX, H, 95, 0, Math.PI, 'blue', false);

    //  Bola amarela 
    desenhar_arco(75, 210, 22, 0, Math.PI * 2, 'yellow', true);

    //  Bola amarela 
    desenhar_arco(225, 210, 22, 0, Math.PI * 2, 'yellow', true);

    // 20. Quadrado vermelho 
    desenhar_quadrado(CX - 44, CY, 44, 38, 'red');

    // 21. L amarelo 
    desenhar_quadrado(0, 252, 20, 48, 'yellow');
    desenhar_quadrado(0, 278, 44, 22, 'yellow');

    // 22. L preto 
    desenhar_quadrado(280, 252, 20, 48, 'black');
    desenhar_quadrado(256, 278, 44, 22, 'black');

    // 23. Texto "Canvas"
    escrever('Canvas', 115, 40, 'black', 20);

    // Borda preta ao redor do canvas
    ctx.strokeStyle = 'black';
    ctx.lineWidth   = 2;
    ctx.strokeRect(0, 0, W, H);