n = int(input("Digite um numero: "))
acumulador = 0
qtd_num = 0
while(n != 0):
    acumulador = acumulador + n
    qtd_num= qtd_num + 1
    print(acumulador)
    n = int(input("Digite um numero: "))
if qtd_num == 0 :
    print(0)
else:
    print(acumulador/qtd_num)