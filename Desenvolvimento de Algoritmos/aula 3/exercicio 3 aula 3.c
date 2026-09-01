#include <stdio.h>

int main(){
	float idade;
	printf("Entre com sua idade: ");
	scanf("%f", &idade);
	int maiordeidade = (idade >= 18) ? : 0;
	if(maiordeidade)
		printf("Vc eh maior de idade\n");
	else
	printf("Vc eh menor de idade\n");
}
