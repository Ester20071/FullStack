#include <stdio.h>

int main(){
	float a, b;
	char op;
	printf("Entre com a operacao: ");
	scanf("%f %c %f", &a, &op, &b);
	
	switch (op){
		case '+':
			printf("%f %c %f = %f", a, op, b, a+b);
			break;
		case '-':
			printf("%f %c %f = %f", a, op, b, a-b);
			break;
		case '*':
			printf("%f %c %f = %f", a, op, b, a*b);
			break;
		case '/':
			if (b != 0)
				printf("%f %c %f = %f", a, op, b, a/b);
			else
				printf("ERRO: divisao por zero");
			break;
		default:
			printf("Oprecao invalida");
	}
	
}
