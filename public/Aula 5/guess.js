var numeroGerado = Math.floor(Math.random()*100)+1;
console.log(numeroGerado);
function VerificarNumero(){
    var numeroAdivinhado = document.getElementById("tentandoAdivinhar").value;

    if (numeroAdivinhado == numeroGerado){
        window.alert("Você acertou!!")
        document.getElementById("tentandoAdivinhar").style.setProperty("background-color", "red");
    }
}