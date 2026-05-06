import sqlite3

BD_NOME_ARQUIVO = 'teste.db'

conexao = sqlite3.connect(BD_NOME_ARQUIVO)
print(f"Banco de dados '{BD_NOME_ARQUIVO}' conectado com sucesso!")
cursor=conexao.cursor()

# criação de tabela 
cursor.execute("""
CREATE TABLE IF NOT EXISTS empregado
(                              
    ID INT PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    EMAIL TEXT NOT NULL                                 
)
""")

conexao.commit()
print("Tabela criada com sucesso!")

#inserção de dados na tabela
sql_insert = "INSERT OR IGNORE INTO empregado (ID, NOME, EMAIL) VALUES (?, ?, ?)"
dados = [
    (1, 'Gabriela', 'gbiondi@fei.edu.br'),
    (2, 'Maria', 'msouza@fei.edu.br'),
    (3, ' Joao', 'joao@fei.edu.br')
]

cursor.executemany(sql_insert, dados)
conexao.commit()
print("Dados inseridos com sucesso")

#seleção de dados da tabela 
cursor.execute("SELECT ID, NOME, EMAIL FROM empregado")
rows = cursor.fetchall()
print("\n --- Dados Atuais da Tabela ---")
for data in rows:
    print(f"ID..........: {data[0]}")
    print(f"NOME..........: {data[1]}")
    print(f"EMAIL..........: {data[2]}")
    print("----------------------------")

print("Select executado com sucesso!")

#atualização nos dados da tabela
sql_update = "UPDATE empregado SET EMAIL = ? WHERE ID = ?"
nome_email = "joaosilva@fei.edu.br"
id_para_atualizar = 3
cursor.execute(sql_update,(nome_email, id_para_atualizar))

conexao.commit()
print("Alteração executada com sucesso!")

#seleção de dados da tabela 
cursor.execute("SELECT ID, NOME, EMAIL FROM empregado")
rows = cursor.fetchall()
print("\n --- Dados Atuais da Tabela ---")
for data in rows:
    print(f"ID..........: {data[0]}")
    print(f"NOME..........: {data[1]}")
    print(f"EMAIL..........: {data[2]}")
    print("----------------------------")

print("Select executado com sucesso!")

#Delete de dados na tabela
sql_delete = " DELETE FROM empregado WHERE ID = ?"
id_para_excluir = 3
cursor.execute(sql_delete,(id_para_excluir,))

conexao.commit()
print("Exclusão executada com sucesso!")

#seleção de dados da tabela 
cursor.execute("SELECT ID, NOME, EMAIL FROM empregado")
rows = cursor.fetchall()
print("\n --- Dados Atuais da Tabela ---")
for data in rows:
    print(f"ID..........: {data[0]}")
    print(f"NOME..........: {data[1]}")
    print(f"EMAIL..........: {data[2]}")
    print("----------------------------")

print("Select executado com sucesso!")
