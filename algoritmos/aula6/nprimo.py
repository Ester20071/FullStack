n = int(input("Digite um numero: "))
while(n != 0):
    i=2
    divisores=1
    while i <= n :
        if n % i == 0 :
            divisores=divisores+1
        i=i+1
    if divisores==2:
        print("Numero " + str(n)+ " eh primo")
    else:
        print("Numero " + str(n) + " não eh primo")
    n = int(input("Digite um numero: "))