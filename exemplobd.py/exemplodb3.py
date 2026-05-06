import psycopg2

BD_NOME = "dbteste"
BD_USUARIO = "postgres"
BD_SENHA = "fei"
BD_HOST = "localhost"
BD_PORTA = "5432"

conn = psycopg2.connect(database = BD_NOME,
                        user = BD_USUARIO,
                        password = BD_SENHA,
                        host = BD_HOST,
                        port = BD_PORTA)

print("Banco de dados conectado com sucesso!")

cur = conn.cursor()

#criação da tabela
cur.execute("""
CREATE TABLE IF NOT EXISTS empregado
(
    ID INT PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,      
    EMAIL TEXT NOT NULL        
)
""")

conn.commit()
print("Tabela criada com sucesso (ou já existia)")

#inserção de dados no postgresql
sql_insert = "INSERT INTO empregado (ID, NOME, EMAIL) VALUES (%s, %s, %s) ON CONFLICT (ID) DO NOTHING" #Evit
dados=(
    (1, 'Ada Lovelace', 'adalovelace.com'),
    (2, 'Radia Perlman', 'Radis@Perlman.com')
)
cur.executemany(sql_insert, dados)

conn.commit()
print(f"Dados inseridos com sucesso (ou ignorados se já existiam). Linhas afetadas: {cur.rowcount} ")

#recuperação de dados
cur.execute("SELECT ID, NOME, EMAIL FROM empregado")
rows = cur.fetchall()

print("\n--- Dados Atuais na Tabela ---")
for data in rows:
    print(f"ID  : {data[0]})")
    print(f"NOME  : {data[1]})")
    print(f"EMAIL  : {data[2]})")
    print('Dados buscados com sucesso')


#atualização de dados
sql_update = "UPDATE empregado SET EMAIL = %s WHERE ID = %s"
novo_email = 'atualiado@gmail.com'
id_para_atualizar = 1
cur.execute(sql_update, (novo_email, id_para_atualizar))

conn.commit()
print("Dados atualizados com sucesso")
print(f"Total de linhas afetadas {cur.rowcount}")

#remoção de dados
sql_delete = "DELETE FROM empregado WHERE ID = %s"
id_para_excluir = 1
cur.execute(sql_delete, (id_para_excluir,))

conn.commit()
print("Dados excluídos com sucesso")
print(f"Total de linhas afetadas: {cur.rowcount}")

print("\nScript finalizado.")