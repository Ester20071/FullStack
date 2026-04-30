#lista dentro de lista ex: 
#lista=[2,4,6,[1,2,3],8,10,12]
#para pedir para imprimir o 1 dentro da lista tem que ser :
#print(lista[3][0])
#lembre-se sempre começamos contando com 0


#outro exemplo - matriz 3x3 quadrada
#Matriz_Python = [[1,2,3],
#                 [4,5,6],
#                 [7,8,9]]
#para printar o 6 da segunda lista:
#print(Matriz_Python [1][2])

#outro exemplo - printar 3 vezes a matriz
#matriz3 = [[0,0,0] for i in range(3)]
#print(matriz3)

#outro exemplo + complexo:
#matriz1 = [[1,2,3],
#                 [4,5,6],
#                 [7,8,9]]
#matriz2 = [[8,9,10],
#                 [11,12,13],
#                 [14,15,16]]
#matriz_soma = [[0,0,0] for i in range(3)]
#matriz_soma[0][0] = matriz1[0][0] + matriz2[0][0]
#print(matriz_soma)


#outro com matriz mais função n deu mto certo
#def soma_matriz(m1,m2):
#    linhas = len(m1)
#    colunas=len(m1[0])
#    matriz_resultado = ([0] * colunas for i in range(linhas))
#    for i in range (0, linhas):
#        for j in range (0, colunas):
#            matriz_resultado[i][j] = m1[i][j] +m2[i][j]
#    return matriz_resultado

#outro exemplo:
matriz1 = [[1,2,3],
           [4,5,6],
           [7,8,9]]
matriz2 = [[8,9,10],
           [11,12,13],
           [14,15,16]]
matriz3 = [[0,0,0],[0,0,0],[0,0,0]]
for i in range(0,3):
    for j in range(0,3):
        for k in range(0,3):
            matriz3[i][j] += matriz1[j][k] * matriz2[j][k]
print(matriz3)