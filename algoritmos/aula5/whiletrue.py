i=0
acumulador=0

while True :
    print(i)
    n=int(input("Digite um número: "))
    acumulador=acumulador+n
    i=i+1
    if i==10 :
        break
print("Soma é: %d"%acumulador)