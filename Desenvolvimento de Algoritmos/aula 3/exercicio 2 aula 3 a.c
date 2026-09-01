
int main(){
	float n1, n2, n3;
	printf("Entre com as notas do aluno: ");
	scanf("%f %f %f", &n1, &n2, &n3);
	
	float media = (n1 + n2 + n3) / 3;
	printf("Media final: %f\n", media);
	
	if(media >= 7)
		printf("Aprovado\n");
	else if (media < 5)
		printf("Reprovado\n");
	else
		printf("Em recuperacao\n");
}
