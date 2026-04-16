#t=[("Andre", "2.5", "Fundamentos de Algoritmos")]
#print(t[0])

#l=[("Fulano", 7.5),
#   ("João", 5.5),
#   ("André", 6.5), 
#   ("Carlos", 9.5), 
#   ("Washington", 8.5)]
#
#for t in l: #t = tupla -- para tupla no l digite nome
#    print("Nome do aluno: "+ str(t[0]))
#
#for t in l:
#    print("Nota do aluno: "+ str(t[1]))



#outra forma para mostrar a nota:
l=[("Fulano", 7.5),
  ("João", 5.5),
  ("André", 6.5), 
  ("Carlos", 9.5), 
  ("Washington", 8.5)]

for i in range(0,len(l)): #t = tupla -- para tupla no l digite nome
    tupla = l[i]
    nome_aluno_tupla=tupla[0]
    nota_tupla=tupla[1]
    print(nota_tupla)
