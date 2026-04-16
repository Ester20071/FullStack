#Podemos pesquisar se um elemento está na lista
#Para isso, verificamos do primeiro ao último comparando com o
#que queremos encontrar.
#Para percorrer listas, utilizamos uma estrutura de repetição:
#while ou for
#A estrutura for é otimizada para trabalhar com listas

#z=[3,5,7,8,11,15]
#for i in range (0,len(z)):
#    print(z[i])



#encontrar valor na lista
#z=[3,5,7,8,11,15]
#v = 10
#
#def encontra_valor(z: list,v: int) -> bool:
#    for i in range (0,len(z)):
#        if z[i] == v:
#            return True
#    return False
#
#encontra_valor(z,11)


#inverter lista
#def inverte_lista(lista: list) -> list:
#    resposta=[]
#    for i in range (len(lista)-1,-1,-1):
#        resposta.append(lista[i])
#    return resposta
#lista=[1, 2, 3, 4, 5]
#lista_invertida = inverte_lista([1, 2, 3, 4, 5])
#print(lista_invertida)

#slicing


#mostrar menor nota
#def menor_nota(notas:list) -> float:
#    menor_nota = notas[0]
#    for i in range (0,len(notas)):
#        if notas[i] < menor_nota:
#            menor_nota = notas[i]
#    return menor_nota
# 
#notas1=[6.5, 3.2, 7.5, 8.3, 5.4]
#menor1= menor_nota(notas1)
#print(menor1)
#
#notas2=[9.7, 4, 7.5, 8.3, 5.4]
#menor2= menor_nota(notas2)
#print(menor2)                      


#mudar a posição - mudar o 2.5 para o começo 
#l=[3.5, 7.3, 2.5, 8.5, 6.5]
#aux = l[0] #o aux é o 3.5 e está na posição 0
#l[0] = l[2] #o 2.5 é o l[2] e ele vai para posição 0
#l[2]=aux #o 3.5 vai para o l[2]
#print(l)


#mudar a posição 
#def troca_elementos(lista: list, i: int, j: int) -> None:
#    aux = lista[i]
#    lista[i] = lista [j]
#    lista[j] = aux
#
#l=[3.5, 7.3, 2.5, 8.5, 6.5]
#print("Antes: " + str(l))
#troca_elementos(l, 0, 2)
#print("Depois :" + str(l))


#TUPLAS:
#t=[("Andre", "2.5", "Fundamentos de Algoritmos")]
#print(t[0])

#l=[("Fulano, 7.5"),("João, 5.5"),("André, 6.5"), ("Carlos, 9.5"), ("Washington, 8.5")]
#print("Nome do aluno: "+ str(l[0]))

l=[('Titanic', 0, 'drama'),
   ('Megamente', 10, 'animação'),
   ('Kong Fu Panda', 5, 'animação')]

for t in l:
    print(t[0])