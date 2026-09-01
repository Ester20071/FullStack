#include <stdio.h>
int main(){
	int a, b, c, min, max;
	printf("Entre com 3 numeros separados por espaco: ");
	scanf("%d,%d,%d", &a, &b, &c);
	
	if (a < b && a<c)
		min = a;
	else if (a<b && b<c)
		min = b;
	else
		min = c;
	if (a>b && a>c)
		max = a;
	else if(b>a && b>c)
		max = b;
	else
		max = c;
	printf("min = %d e max=%d\n", min, max);
}
