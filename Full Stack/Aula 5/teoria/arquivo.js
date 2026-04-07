//trava a página - window alert:
window.alert("Esta é uma mensagem de alerta");
//é o nosso print de valor de entrada:
console.log("Esta é uma mensagem de log");
//deixe alguma entrada ter algum valor (ser uma variável) - ao invés de let poderia ser var tbm (Como se fosse o input do python):
var entrada = prompt("Qual a sua idade?");
//para printar:
console.log("a sua idade é " +  String(parseInt(entrada) + 12) + " anos");
//parseInt da a somatória do número inteiro - forma String(parseInt(entrada) + 12) - assim ele vai somar 
//psrseFloat da a somatória do número com vírgula


var a = 1;
while(a<10) {
    var b=a;
    a = a +1;
    console.log(b);
}
console.log("a:" + a);
console.log("b:" + b);
//constante use para qdo for pi etc - a sempre vai ser 1 sempre
const a = 1;
a = 2;
document.getElementById("testeDeId").innerHTML = "Sua idade foi definida"

function coletaDeInformacao() {
    var nome = document.getElementById("testeDeInput").value
    msgTeste(nome)
}
