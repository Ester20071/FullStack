def fatorial(n):
    f=1
    for i in range (1, n+1):
        f=f*i
    return f
x = int(input("Digite um numero: "))
while x!= 0:
    resultado=fatorial(x)
    print(resultado)
    x=int(input("Digite um numero: "))