dia = int(input("Digite o dia: "))
mes = int(input("Digite o mes: "))
ano = int(input("Digite o ano: "))

data = dia*mes
if dia*mes == ano%100:
    print("Data Mágica:", dia, mes, ano )
    print("É uma data mágica")
else:
    print("Não é uma data mágica")