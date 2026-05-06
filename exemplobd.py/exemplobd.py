import sqlite3

conexao = sqlite3.connect(r"C:\Users\feispepaulino\Documents\exemplobd.py\Chinook_Sqlite.sqlite")
cursor = conexao.cursor()
resultado = cursor.execute("SELECT * FROM track")
print(resultado)
for dado in resultado.fetchall():
    print(f"TrakId: {dado[0]},"
          f"Name:   {dado[1]},"
          f"AlbumId: {dado[2]},"
          f"MediaTypeID: {dado[3]},"
          f"GeneroId: {dado[4]},"
          f"Composer:{dado[5]}"
          f"Miliseconds: {dado[6]},"
          f"Bytes: {dado[7]},"
          f"UniPrice: {dado[8]}"
          )

conexao.close()