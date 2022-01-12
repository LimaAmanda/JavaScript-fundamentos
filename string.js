console.clear();

// string é um tipo de valor que necessita ser deferido com aspas.
// Existem 3 tipos de aspas: aspas duplas simples e backticks (acento grave).

// let valor1 = "texto";
// let valor2 = 'texto';
// let valor3 = `texto`;
// let a = ` óla`;

// nos primeiros dois casos, são em tudo semelhantes.
// no terceiro caso, são consideradas aspas com funcionalidades. vejamos:

let nome= "Amanda";
console.log(`Bom dia, ${nome}`);
console.log(`o resultado de 10 + 20 é ${10 + 20}`);

// a expresão dentro de $ {...} é avaliada e transformada em resultado.
// é conhecida como interpolação de strings ou template string.
// os dois primeiros exemplos não têm esta funcionalidade.