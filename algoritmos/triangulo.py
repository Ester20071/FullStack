a=int(input("digite a: "))
b=int(input("digite b: "))
c=int(input("digite c: "))
if a+b>c and b+c>a and a+c>b :
 print("É um triângulo ", end="" )
 if a==b and a==c and b==c :
   print("equilátero")
 if (a==b and a!=c and b!=c) or (a==c and a!=b and c!=b) or (a==c and a!=b and c!=b) :
   print("isósceles")
 if (a**2 + b**2 ==c**2) or (c**2 + b**2 ==a**2) or (c**2 + a**2 ==b**2) :
   print("retângulo")
   
 elif (a!=b and b!=c and c!=a):
   print("escaleno")
 
else :
 print("Não é um triângulo")