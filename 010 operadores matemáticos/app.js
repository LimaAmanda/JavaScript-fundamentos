// operadores matemáticos.

/*
Para quem não está no ramo da programação os operadores matemáticos, são muito semelhantes aos operadores matemáticos que aprendemos na escola,
quando aprendemos a adição, subtração, multiplicação e divisão.

Estes sinais operadores permitem executar operações matemáticas como numbers no entanto, existem detalhes que não aprendemos na escola.
*/

/*
conceitos (por curiosidade)
10 + 20
o 10 e o 20 são designados por operadores
o sinal + é o operador
*/

/*
Os operadores podem ser unários ou bínarios são unários quando, fazem parte de uma operação que tem apenas um operando.
*/

let valor =10;
valor1 = -valor1; // -10

/*
são binários quando fazem parte de uma operação com mais de um operando.
*/

let valor2 =10, valor3 =20;
let resultado = valor2 -valor3;

/*
 O mesmo simbolo tem resultados distintos em cada uma das operações.
 */

 // ---------------------------------------------------------

 // operadores matemáicos básicos

 a + b // adição
 a + b // subtração
 a + b // multiplicação
 a + b // divisão

 /* 
% - restante ou resto de uma divisão ( também conhecida por modulo)

7 /2 = 3.5
7 % 2 =1

o operador % vai devolver o resto de uma divisão por inteiros.
*/

/*
exponencial / potenciação
*/

a ** b
10 ** 2 // 100

/*
concatenação de strings
Embora não pareça relacionando com operadores matemáticos, há alguns aspectos a ter em conta.
*/

let nome = "Amanda ";
let apelido = "Lima";
let nome_completo = nome + " " + apelido; // Amanda Lima

"1" + 2 // 12
2 + "1 " // 12

"2" + 1 + 3 // 213
1 + 3 + "2" // 42

6 -'2' // 4

/* 
conversão numérica -utilização de operador unário ( um sinal e um oprando)
*/

let x =1;
+x; // 1

let y = -10;
+y; // 10

/*
conversão de boleanos para números
*/

+tru // 1
+false // 0

/* converter strings para números
*/

let valor_a = "10";
let valor_b = "20";

+valor_a + + valo_b // 30
Number(valor_a) + Number(valor_b) // 30
