var numero = [-2, 40, 16, 111, 33, 64]
//posição/indi 0   1   2   3    4   5

console.log(numero)
console.log(numero[3])

var aleatorios = [true, "texto", 345, "texto", false]
console.log(aleatorios)

console.clear()

var especiais = ["Jesus", "Lorena", "Jaqueline", "Nicole", "Marluce", "Cleidson", "Osmar", "Emilly"]


console.log(especiais[3], especiais[7])

console.clear()

//array bidimensional

var bidi = [
    ['banana', "maçã", 'pêra'], // linha 0
    //   0        1       2
    ['laranja', true, 1], //linha 1
    [null, 'uva', -350] // linha 2
]// ele conta as linhas e não o oque tem dentro

//para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois da coluna
console.log(bidi)
console.log(bidi[1][1])//true
console.log(bidi[2][2])//-350

console.clear()

//array bidi

var itens = [
    ["pipoca", "arroz", "fejão", "batata"],
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"]
]
console.log(` ${itens[0] [2]} \n ${itens[1] [3]} \n ${itens[2] [2]} \n ${itens[3] [3]}`)

console.clear()

let moeda = ["real", "euro", "coroa", "dolar"]
console.log (moeda)
moeda[3] = "yen"
console.log(moeda)

console.clear()
//tostring

let num = [2, 4, 6, 8, 10]
console.log(num)
var mudança = num.toString(); //  feito para transfromar em uma string 
console.log(mudança)

console.clear()
//join

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudança2 = teste1.join("**") // transforma array em string e muda o separador dos valores
var mudança3 = teste1.toString()
console.log("com o join")
console.log(mudança2)
console.log("com o ToString")
console.log(mudança3)

console.clear()
//length
let array = [0, 2, 3, 5, 7]
console.log(array.length)

console.clear()
// Pop remove no final

let pop = ["pollyana", "andre", "felippe", "lucas nathan", "esther", "lude mila"]

var mudança4 = pop.pop()
console.log(mudança4)
console.log(pop)

//push insere no final da ray

var mudança5 = pop.push("saraiva")
console.log(pop)
console.log(mudança5)

console.clear()
//shift

var nomes = ["audi", "celta", "Uno com escada", "hb20"]
console.log(nomes)
var mudança6 = nomes.shift()
console.log(mudança6)

console.clear()
//unshift
 

var inicio = [true, 34, "mano", "socorro", "js"]
console.log(inicio)
var mudança7 = inicio.unshift("nice")
console.log(mudança7)
console.log(inicio)

//delete

delete inicio[2]
console.log(inicio)


