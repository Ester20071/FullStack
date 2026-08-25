#include <stdio.h>
#include "conversoes.h"

int main()
	int opcao;
	float valor, resultado;
	
	do {
		printf("1 - Celcius para fahrenheit\n");
		printf("2 - Fahrenheit para celsius\n");
		printf("3 - Metros para km\n");
		printf("4 - Km para metros\n");
		printf("5 - Segundos para minutos\n");
		printf("6 - Minutos para segundos\n");
		printf("0 - Sair\n");
		printf("Escolha uma opção: ");
		scanf(%d, &opcao);
		if (opcao >= 1 && opcao <=6){
			printf("Digite o valor: ");
			scanf("%f, &valor");
	}
	
	switch (opcao) {
		case 1 :
			resultado = celsiusparafahrenheit(valor);
			printf("Resultado: %.2f fahrenheit\n", resultado);
			break;
		case 2:
			resultado = fahrenheitparacelsius(valor);
			printf("Resultado: %.2f celsius\n", resultado);
			break;	
		case 3:
			resultado = metrosparakm(valor);
			printf("Resultado: %.2f quilometros\n", resultado);
			break;	
		case 4:
			resultado = kmparametros(valor);
			printf("Resultado: %.2f metros\n", resultado);
			break;
		case 5:
			resultado = segparamin(valor);
			printf("Resultado: %.2f minutos\n", resultado);
			break;
		case 6:
			resultado = minparaseg(valor);
			printf("Resultado: %.2f segundos\n", resultado);
			break;
		case 0:
			printf("Encerrado\n", resultado);
			break;	
		default:
			printf("opcao invalida\n");
		}

	} while (opção !=0);
	return 0;
}
	
	
	
	
	
	
