#ler 5 numeros com loop for ou while 
#ao ler add em uma lista
#len(l) - tamanho 
l=[]
for i in range (5): #no lugar do i é possivel colocar underline e vice versa
    n=int(input("Digite um valor: "))
    l.append(n)
print(l)
print(l[0],l[len(l)-1]) #primeiro numero e último numero 
# para pegar a última posição no python (so no pyhton)digite l[-1] -- mas isso so funciona no pyhton se quiser algo mais confiavel deixe desse jeito msm
