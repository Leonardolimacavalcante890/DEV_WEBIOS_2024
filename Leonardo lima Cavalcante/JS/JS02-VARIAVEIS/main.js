console.log("Hello World!")
//quanto trabalho com texto coloco o mesmo dentro de aspas duplas ou simples

//Variaveis
//quero criar um espaço na meomoria do computador -felippe e dizer que esse espaço na memoria irá receber o valor 8
var _felippe = 8; //variavel numerica
var _felippe = 'Cristiano Ronaldo'; //variavel string //redeclarar uma variavel


console.log(_felippe);

let letsGo = 4
letsGo = 6
console.log(letsGo)
console.clear()

//const

const PI = 3.1415;

console.log(PI)

console.clear()

let NAN = 0 / 0;

console.log(NAN)

console.clear()

//let IOS = "instituto da Oportunidade Social"; //variavel IOS recebeu uma string

console.log("Instituto" + "da" + "Oportunidade" + "Social"); //concatenar: é juntar tudo em uma frase só, é possivel strings ou concatenar variaveis

console.clear()
var numero1 = 2
var texto = "te amo"
var texto2 = "sonho"

console.log(texto + texto + numero1)
console.clear()

//valores booleanos

var num1 = 1
var num2 = 1
//num1 é igual a num2
//1 é igual a 1 = true
//as duas variaveis recebe o mesmo valor

console.log(num1 == num2)


//operadores

var operador1 = 8;
var operador2= null;

console.log(operador1 * operador2); //8 vezes 0

var operador3 = '5';
var operador4 = 1;

console.log(operador3 - operador4); // "5" - 1 = 4

var operador5 = "5";
var operador6 = 1;

console.log(operador5 + operador6)// '5' + 1 = 51

var operador7 = 5;
var operador8 = 1;

console.log(operador7 + operador8)

var operador9 = 'five';
var operador10 = 2;

console.log(operador9 * operador10) // 'five' vezes 2 = NaN porque sao letras e muitos caracteres
console.clear()

var valor = 2

var valor1 = 2
var resultado = valor % valor1;

console.log(resultado)
// var compare = 2 > 3 != 2 //false ou true
var compara = 2 > 3 == 2 //false pq 2 nao é maior que 3 e dps ele verifica se 3 é igual a 2
var teste = !compara //true pq 2 é diferente de 3 e 3 é diferente de 2


console.log("variavel teste" + compara)
console.log("variavel teste" + teste);
//so esta comparando o valor
//! é diferente
//se o valor é menor ou igual
//compara o valor e o tipo
//só estA comparando o valor valor

console.log(compara)

console.clear()

let valor3 = 4
let valor4 = 6
let resultado1 = valor3 < valor4 || valor3 == valor4
//true e false == false
//true e true == true
// true e true == true
//true OU flase == true

console.log(resultado1)

let valor5 = 4
let valor6 = "6"

console.log(typeof valor6) // tipo de valor