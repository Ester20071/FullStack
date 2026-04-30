#Strings são sequências de caracteres
#for i in range(0, 225):
#    print("%c"% i, end="")

#palavra="palavra"
#print(palavra[:])
#print(palavra[-1])
#print(palavra[0:3])
#print(palavra[1:2])
#
#palavra.capitalize().lower()
#palavra.find("la")
#
#frase="              Essa é uma frase para teste"
#frase=frase.strip()
#frase.replace(" ", "")
#l=frase.strip(" ")
#print(l)
#
#p=input("Digite a palavra: ")
#p = p.replace('a', 'A')
#p = p.replace('e', 'E')
#p = p.replace('i', 'I')
#p = p.replace('o', 'O')
#p = p.replace('u', 'U')
#print(p)

#vogais=("a", "e", "i", "o", "u")
#for i in range(0, len(p)):
#    if p[i].lower() in vogais:
#        indice_vogal=vogais.index(p[i].lower)
#        v=vogais[indice_vogal]
#        vogais_dict[v] +=1

#p=input("Digite a palavra: ")

#def palindromo(frase: str) -> bool:
#    ini = 0
#    fim = len(frase)-1
#    while ini<fim:
#        if frase[ini] != frase[fim]:
#            return False
#        ini+=1
#        fim+=1
#    return True
#frase="ana"
#print(palindromo)



maior_palavra=""
arquivo=open("lorem.txt",'r')

for linha in arquivo.readlines():
    linha=linha.replace(".","").replace(",","")
    palavras=linha.split(" "),
    for palavra in palavras:
        if len(palavra)>len(maior_palavra):
            maior_palavra=palavra
print(maior_palavra)
print(len(maior_palavra))
