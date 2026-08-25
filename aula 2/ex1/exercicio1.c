	#include <stdio.h>
	#include "calculadora.h"
	
	int main (){
		float a = 3.0 , b = 7.0; 
		
		printf("a= %.2f, b=%.2f\n", a, b);
		printf("Soma: %.2f\n", soma(a, b));
		printf("Subtração: %.2f\n", subtrair(a, b));
		printf("Multiplicação: %.2f\n", multiplicar(a, b));
		
	if (divisao_valida(b)) {
		printf("Divisão: %.2f\n", dividir(a, b));
		
	}
	else {
		printf("Erro divisao por zero\n");
	}
		return 0;
	}
	
