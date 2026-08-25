	#include "numeros.h"
	
	int par(int n) {
		return n % 2 == 0;
	}
	
	int primo(int n){
		int i;
		if (n<2) {
		return 0; }
		for (i=2; i< n; i++) {
			if (n% i == 0) {
				return 0;
			}
		}
		return 1;
	}
	
	
	int fatorial(int n){
		int resultado = 1;
		int i;
		
		for (i=1; i<= n; i++) {
			resultado *= i;
		}
		return resultado;
	}
	
	int max (int a, int b) {
		if (a>b) {
			return a;
		}
		return b;
	}
	
	int pot(int a, int b) {
		int resultado = 1;
		int i;
		for (i=0; i <b; i++) {
			resultado*= a;
		}
		return resultado;
	}		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
