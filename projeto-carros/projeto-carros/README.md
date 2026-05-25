# Sistema de Gerenciamento de Venda de Carros

## Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- MongoDB instalado e rodando

### Instalação

1. Clone o repositório ou baixe os arquivos
2. Entre na pasta do projeto:
```
cd Documents\projeto-carros
se nn funcionar exemplo:
cd C:\Users\Lenovo\Documents\projeto-carros\projeto-carros
-------------------------INSTRUCOES--------------------------
instrucoes: Abre o Explorador de Arquivos e navega até encontrar a pasta que tem o server.Abre o Explorador de Arquivos e navega até encontrar a pasta que tem o server.js dentro. Quando achar, clica na barra de endereço lá em cima e copia o caminho:
![barra de endereço]
Aí no CMD digita:
cd COLA_O_CAMINHO_AQUI
```

3. Instale as dependências:
```
npm install
```
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
NÃO FAÇA ESSE PASSO SE FOR USAR O MONGO DB ATLAS
4. Inicie o MongoDB (se não estiver rodando):
```
mongod
``` ir para o 5 primeiro se nn funcionar digita esse----
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
5. Rode o servidor (precisa de permissão de admin para porta 80):
```
node server.js
```
ou no Linux/Mac:
```
sudo node server.js
```

6. Acesse no navegador: `http://localhost`

---

## Páginas do sistema

| Página | Rota |
|--------|------|
| Projetos (página principal) | `/` |
| Cadastro de usuário | `/usuarios/cadastro` |
| Login | `/usuarios/login` |
| Listagem de carros | `/carros` |
| Gerência de carros | `/carros/gerencia` |

---

## Funcionalidades

- **Usuários**: Cadastro e login com senha criptografada
- **Carros**: Criar, listar, editar, remover e vender carros
- **Controle de estoque**: Mostra "Esgotado" quando quantidade = 0

---

## Banco de Dados (MongoDB)

**Coleção: usuarios**
- nome
- login
- senha (criptografada)

**Coleção: carros**
- marca
- modelo
- ano
- qtde_disponivel

- Se aparecer erro de permissão na porta 80, usa essa alternativa — abre o arquivo server.js e troca a última parte:
- jsapp.listen(3000, () => {   // troca 80 por 3000
E acessa no navegador: http://localhost:3000
Se a porta 80 funcionar, acessa: http://localhost

1. Abre o CMD
2. cd Documents\projeto-carros
3. npm install        ← só na primeira vez
4. node server.js     ← toda vez que quiser rodar
5. Abre o navegador → http://localhost ou http://localhost:3000