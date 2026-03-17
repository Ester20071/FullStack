//é o nosso print de valor de entrada, ao invés de por print aqui colocamos console.log():
console.log("Esta é uma mensagem de log");
//deixe alguma entrada ter algum valor (ser uma variável) - ao invés de let poderia ser var tbm (Como se fosse o input do python):
var entrada = prompt("Qual a sua idade?");
//para printar:
console.log("a sua idade é " + "a sua idade é " +  String(parseInt(entrada) + 12) + " anos");
if(entrada>18) {
    console.log("Você é maior de idade");
}
else if(entrada == "18") {
    console.log("Você tem EXATAMENTE 18 anos")
}
else{
    console.log("Você é menor de idade")
}