#include "conversoes.h"
float celsiusparafahrenheit(float celsius){
	return (celsius * 9/5) + 32;
}


float fahrenheitparacelsius(float fahrenheit){
	return (fahrenheit - 32) * 5 / 9;
}

float metrosparakm(float metros){
	return metros/1000;
}


float kmparametros(float quilometros){
	return quilometros*1000;
}

float segparamin(float segundos){
	return segundos/60;
}

float minparaseg(float minutos){
	return minutos*60;
}

