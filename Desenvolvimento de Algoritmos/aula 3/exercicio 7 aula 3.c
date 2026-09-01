#include <stdio.h>
#include <string.h>
int main(){
	char usuario_cad[255]= "admin";
	char senha_cad[255] = "123456";
	char usuario[255], senha[255];
	
	printf("Entre com o usuario: ");
	scanf("%s", usuario);
	printf("Entre com a senha: ");
	scanf("%s", senha);
	
	int comp_u = !strcmp(usuario_cad, usuario);
	int comp_s = !strcmp(senha_cad, senha);
	
	if(comp_u == 1 && comp_s == 1)
		printf("login realizado com sucesso");
	else if (comp_u != 0 && comp_s != 0)
		printf("usuario e senha incorretos");
	else if (comp_u != 0 )
		printf("usuario incorreto");
	else if (comp_s != 0)
		printf("senha incorreta");
}
