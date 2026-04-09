def data_magica (dia, mes, ano) :
    ano2 = ano
    while ano2>100:
        ano2 = ano2 -100
    if dia * mes == ano2 :
        return True
    else:
        return False

for dia in range(1,32):
    for mes in range (1,13):
        for ano in range (1901, 2027):
            x = data_magica (dia, mes, ano)
            if x == True :
              print("Data Mágica: ", dia, mes, ano)