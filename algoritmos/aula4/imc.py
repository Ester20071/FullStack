peso=float(input("Digite seu peso: "))
altura=float(input("Digite sua altura: "))
print(peso/altura**2)
imc=(peso/altura**2)
imc=round(imc,1)
if imc<18.5 :
    print("Abaixo do peso")
elif imc >=18.6 and imc <= 24.9 :
    print ("Parabéns, peso ideal")
elif imc >= 30 and imc <= 34.9 :
    print("Obesidade grau I")
elif imc >=35 and imc <= 39.9 :
    print("Obesidade grau II - severa")
else :
    print("Obesidade III - Mórbida")
