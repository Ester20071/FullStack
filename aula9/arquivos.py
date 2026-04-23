#SINTAXE: arquivo = open("teste.txt", "w")
#arquivo = open("teste.txt", "r")
#for linha in arquivo.readlines():
#    print(linha)
#arquivo.close()

nome_busca="ciclano"
senha_busca = "5678"
arquivo_usuarios = open("usuarios.csv", "r")
encontrou = False
for usuario in arquivo_usuarios.readlines():
    campos_usuario = usuario.split(",") # string em lista
    nome_cadastrado = campos_usuario[0].strip()
    senha_cadastrada = campos_usuario[1].strip()
    print(nome_cadastrado)
    print(senha_cadastrada)
    if nome_busca == nome_cadastrado and senha_busca == senha_cadastrada:
        print("Login bem sucedido")
        encontrou = True
        break

if not encontrou:
    print("usuario não cadastrado")
arquivo_usuarios.close()