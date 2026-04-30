from obtem_videos import gera_sugestoes
print("Bem-vindo a ---")
print("Sugestoes:")
sugestoes = gera_sugestoes() #retorna dicionario
for sugestao_nome in sugestoes.key():
    campo_sugestao = sugestoes[sugestao_nome]
    print("Nome: " + sugestao_nome)
    print("Genero: " + campos_sugestao['genero'])
    print("Ano: " + campos_sugestao['ano'])
    print("Duracao: " + campos_sugestao['duracao'])
    print("Quantidade: " + campos_sugestao['quantidade'])
    print("----")



#para buscar os videos
busca = input("Busque por um video: ")
busca=busca.lower()
encontrados = {}
for nome_video in sugestoes.keys():
    if str(nome_video).find(busca) >= 0:
    encontrados[nome_video] = sugestoes[nome_video]
    
for sugestao_nome in encontrados.key():
    campo_sugestao = sugestoes[sugestao_nome]
    print("Nome: " + sugestao_nome)
    print("Genero: " + campos_sugestao['genero'])
    print("Ano: " + campos_sugestao['ano'])
    print("Duracao: " + campos_sugestao['duracao'])
    print("Quantidade: " + campos_sugestao['quantidade'])
    print("----")



#colocar id para pessoa curtir e descurtir o video ---- criar banco de dados para ver quem curtiu e descurtiu
#banco de dados ==  usuario(1) --- cria --- (n) playlist
#                       /                          /
#                    curti                        tem  
#                      /                    
#               (n:m) videos          --------   /  (n:m)


#para criar os bancos de dados 
#usuarios.txt
#playlist.txt
#video_playlist.txt
#usuario_video.txt
#videos.txt
#





#chama uma funcao que te gera um dicionario