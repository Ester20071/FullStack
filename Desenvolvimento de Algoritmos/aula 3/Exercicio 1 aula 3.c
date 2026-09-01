

	#include <stdio.h>
	int main(){
		int a, b;
		printf("Entre com os dois numeros inteiros: ");
		scanf("%d %d", &a, &b);
		if(a>b){
			printf("Maior %d\n", a );
		}
		else if(a<b){
			printf("Maior %d\n", b);
		}
		else{
			printf("Os numeros sao iguais");
		}
	}
