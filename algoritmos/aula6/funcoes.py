def eh_primo (numero_verificar):
    primo = True
    for i in range (2,numero_verificar):
        if numero_verificar % i == 0:
            primo = False
    return primo
    
n= int(input("Digite um numero: "))
while(n != 0):
    v = eh_primo(n)
    
    if v == True :
        print("O número " + str(n) + (" eh primo"))
    else:
        print("O número " + str(n) + (" não eh primo"))
    n = int(input("Digite um numero: "))