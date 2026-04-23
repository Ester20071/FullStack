#Boas-vindas a _______
#1- Para se cadastrar
#2- Para realizar login ---- >
# login:
#    nome:
#    senha:
#0- Para sair
#Cadastro
#nome:
#email:
#data:
#senha:
# Login como administrador
# Cadastrar e excluir vídeos

#arquivo = open("arquivo.txt", "w")
#arquivo.write("Bem-vindos a PlotGirls\n")
#arquivo.write("Uma Plataforma de Streaming de filmes e séries\n")
#int(input("Digite "))
#arquivo.close()

def mensagem_boasvindas() -> int:
    print("Bem-vindos a PlotGirls\n")
    print("Digite")
    print("1- Para se cadastrar")
    print("2- Para realizar login")
    print("3- Para realizar login como administrador")
    resp = int(input("Comando: "))
    if resp == 1:
        n=int(input("E-mail: "))
        e=int(input("Senha: "))
    return resp

entrada = mensagem_boasvindas()
while(entrada != 0):
    if entrada == 1:
        os.system('cls')
        entrada=cadastro()
