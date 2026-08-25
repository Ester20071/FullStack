#include <stdio.h>
#include "numeros.h"

int main(){
	int v1 = 5;
	int v2 = 6;

	printf("par: %d\n", par(v1));
	printf("par: %d\n", par(v2));
	
	printf("primo: %d\n", primo(v1));
	printf("primo: %d\n", primo(v2));
	
	printf("fatorial: %d\n", fatorial(v1));
	printf("fatorial: %d\n", fatorial(v2));
	
	printf("max(%d, %d) = %d\n", v1,v2, max(v1, v2));
	printf("%d^%d = %d\n", v1, v2, pot(v1, v2));
}
	
	
