limite=int(input("Digite a velocidade da via: "))
velocidade=int(input("Digite a velocidade do carro: "))
percentual=((velocidade-limite)/limite)*100
if velocidade <= limite:
    print("Velocidade do carro esta dentro da velocidade da via!")
else:
    print("Velocidade %d%% acima do limite"%percentual)
    if percentual < 20:
        print("Penalidade: Multa de R$ 130,16")
        print("Pontuação: 4 pontos na CNH")
    elif percentual >=20 and percentual <=50:
        print("Penalidade: Multa de R$ 195,23")
        print("Pontuação: 5 pontos na CNH")
    else:
        print("Penalidade: Multa de R$ 880,41")
        print("Pontuação: 7 pontos na CNH")