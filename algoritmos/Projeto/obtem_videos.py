def gera_sugestoes():    
    arquivo=open("series.csv", "r")
    linhas = arquivo.readlines()
    cabecalho=linhas[0].split(",")
    sugestoes_dic={}
    for linha in linhas[1:]:
        dados_video = linha.split(",")
        nome_video = dados_video[0].strip()
        genero_video = dados_video[1].strip()
        ano_video = dados_video[2].strip()
        duracao_video = dados_video[3].strip()
        quantidade_video = dados_video[4].strip()
        sugestoes_dic[]