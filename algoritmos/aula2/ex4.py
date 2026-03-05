nascimento=int(input("Digite seu ano de nascimento: "))
ano=int(input("Digite o ano atual: "))
conta1=ano-nascimento
if conta1 >= 16:
    print("Já tem idade para votar")
else:
    print("Não tem idade para votar")
if conta1 >= 18:
    print("Pode conseguir a Carteira de Habitação")
else:
    print("Pode conseguir a Carteira de Habitação")
