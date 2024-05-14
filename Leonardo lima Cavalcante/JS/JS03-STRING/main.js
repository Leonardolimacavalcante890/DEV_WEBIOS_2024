var string = "os alunos estão ";
var string2 = "reprovados ";
var string3 = "ou aprovados?";
var olhaai = " os reprovados";
var num = 2;
var num2 = 6;

console.log(string + string2 + string3);

//concatena e ainda faz contas matematicas de soma
console.log(`${string + string2 + string3 + (num + num2) + olhaai}`);

console.clear()


// I O S - T O T V S
// 0 1 2 4 6 7 8 9 10
var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos).";

console.log(texto1.charAt(2));
console.log(texto1[27]);

console.clear()

//tamanho string

var texto2 = 'IOS';
var texto3 = 'Esta chovendo';

console.log(`na variavel texto2 tem ${texto2.length} caracteres`);
console.log(`na variavel texto3 tem ${texto3.length} caracteres`);
console.clear()

var texto4 = 'aqui esta tudo em minusculo';
var texto5 = 'AQUI ESTA TUDO EM MAIUSCULO';

console.log(`Minusculo: ${texto4.toUpperCase()}`); //deixa tudo em maisculo
console.log(`Maiusculo: ${texto5.toLowerCase()}`); //deixa tudo em minusculo

console.clear()

var str = "Mozilla";
// M O Z I L L A
// 0 1 2 3 4 5 6
//A posição 1 é o inicio e a posição 3 é forma de dizer que ele pare, onde quero que ele mostre

console.log(str);
console.log(str.substring(1, 3));
console.log(str.substring(3)); // aqui é do 3 a diante

console.clear()
//feito para trocar a palavra por outra
var texto6 = "olha a pipoca";
console.log(texto6.replace('pipoca', 'Carreta Furacão'));

console.clear()

var texto7 = "          Olha a pipoca       ";

//retirar todo espaço em branco no inicio e no fim, MAS NÃO NO MEIO DAS PALAVRAS
console.log(texto7)// sem trim
console.log(texto7.trim()) //com trim


