#fazer os 100 primeiros numeros primos e depois somá-los
def primo (n:int) -> bool:
    e_primo = True
    for i in range(2,int(n/2)+1):
        if n % i == 0:
            e_primo = False
    return e_primo
l=[]
acumulador=0
for i in range (1,101):
    if primo(i):
        l.append(i)
    #iterar por todos os elementos em l e adicionar em acumulador
    acumulador=acumulador+i
print(l)
print(acumulador)
