#dicionarios tem chaves para encontrar mais rapido
#sempre vai ter chave valor o indice é 0,1,2,3... que é as posições, mas a chave é diferente a chave eu que crio
#DIFERENÇA LISTA vs DICIONARIO
# lista: 
#   lista=["fulano", "ciclano", "beltrano"]
#   lista[0]
#dicionario: 
#   dicionario{1234:"fulano", 
#              5678: "ciclano",
#              3579: "beltrano"}
#   dicionario[1234]
# no dicionario o fulano é o valor e o 1234 é a chave


#exemplo:
alunos = {} 
numero = 1234 #chave-identificador é o 1234
nome = "Fulano"
alunos[numero] = nome
print(alunos[numero])