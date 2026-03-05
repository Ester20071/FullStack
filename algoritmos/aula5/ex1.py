i=1
s=0

while i<= 6:
    n=int(input("Digite um número: "))
    i=i+1
    if n>s:
        s=n
    else:
        n=s
print("O maior número é: %d " % s )