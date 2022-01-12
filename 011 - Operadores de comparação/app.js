
// Operadore de comparação

/*
Ja conhecemos operadores de comparação na matemática maior que, menor que, maior ou igual a, etec.

vamos aprender a comparar valores e perceber o seu resultado.
*/

// importante: todas as comparações retornam um boleano
// true - verdadeiro, correto
// false - falso, errado ou incorreto

console.log(10 > 20); // false
console.log(10 < 20); // true
console.log(20 > 20); // false
console.log(20 >= 20); // false
console.log(20 < 20); // false
console.log(20 <= 20); // true

console.log(20 == 20); // true
console.log(10 == 20); // false
console.log(10 != 20); // true
console.log(20 != 20); // false


// comparação de estrings - comparação de caracteres de forma sequêncial
console.log("Amanda" == "Amanda"); // true
console.log("Amanda" != "Amanda"); // false
console.log(" Ana" == "Amanda");  // false
console.log("Ana" != "Amanda"); // true

console.log(" Amanda" > "Amanda"); // false
console.log(" Amanda" >= "Amanda"); // true
console.log(" Amanda" > "Amanda");  // false
console.log(" Ana" > "Amanda"); // true

/*
Strict equality
A verificação da igualdade de dois  valores tem um problema:
Não diferencia o 0 do false.
*/

0 == false; // true
"" == false; // true

/* com o == os operandos são convertidos para números */

/* strict equality operatot == não faz essa conversão*/

0 === false; // true
"" === false; // true

null == undefined; // true
/* outras comparações (> < >= <=) null = 0 e undefined = Nan*/



