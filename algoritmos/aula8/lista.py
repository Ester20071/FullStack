#      l=['a', 56,7,'b',4.5] --- elementos /valores 
#indice    0  1  2  3   4
#uma lista representa um valor na memoria - nn vamos mais fazer uma copia
#uma lista é uma variavel que armazena um conjunto de valores - com tipos homogeneos ou heterogeneos mas nn é recomendado - os valores sao acessados por um indice
#lista como vazia: l=[]
#lista normal:
#l=['a', 56,7,'b', 4.5]
#print(l)
#para falar a posição- l[4]
#l.append - para criar valores a letra varia conforme oq vc colocar - para colocar algo no final da lista

#exemplos :
#l=[] - l vazio
#l.append(2) - coloca 2 no fim da lista como nn 
#print(l) - print
#l.insert(1,"oi") - para inserir coisas em determinada posição
#l=['a', 'modjpi', 'dhuewod', 1,20302,20938,10483] 
#l.insert(1,"oi")

#outro exemplo
#print(l)
#l1=[32,7,1]
#print(l1)
#l1.insert(len(l1),'a') - len tamanho de l1
#l1.append('b') #coloca b no final
#print(l1)

l2 = [1,2,3,4,5,6,7,8,9,10]
for i in range (0,len(l2)):  #para i de 0 ate o tamanho de l2
    l2[i]=l2[i]**2 #altera o valor dele por ele ao quadrado
print(l2)

#l3=[]
#for i in range(1,11):
#    x=2**i
#    l3.append(x)
#print(l3)
def altera_lista(l):
    l[2]=3 #altera posicao na memoria
def altera_variavel(x):
    x=3 #variavel x nao e uma posicao na memoria so copiando um valor da variavel na memoria
l5=[5,4,1]
x=5
altera_lista(l5)
altera_variavel(x)
print(l5)
print(x)