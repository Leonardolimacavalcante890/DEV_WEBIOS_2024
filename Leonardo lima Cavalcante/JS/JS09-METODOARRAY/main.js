//metodo forEach

let frutas = ["Maça", "Laranja", "Kiwi", "Amora", "Morango", "Manga"];

//Exibir o nome e o indice

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta:${nomeFruta}`)
    console.log(`Indice: ${indice}`)
}

console.clear()

//arrow function
frutas.forEach(parametro = (nomeFruta, indice) =>{
    console.log(`nomeFruta ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
}) 
//fuction mais minimalista
frutas.forEach((parametro) => console.log(parametro)) 
//ele vai retornar apenas o nome e não vai retornar o indice

console.clear()

let tarefas = [
    {//0
        id: 1,
        isPronta: true,
        nomeTarefa: "pular"
    },

    {//1
        id: 2,
        isPronta: false,
        nomeTarefa: "ir para o lado"
    },

    {//2
        id: 3,
        isPronta: true,
        nomeTarefa: "descer"
    }

]

tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [2,4,12,34,79]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("Nova array" + novoArray)

let mapteste = tarefas.map((retornaText) => {console.log(retornaText.nomeTarefa)
})

console.clear()

let numeros2 = [3,13,24,26,47,50,60,78,89]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num) {
    return num > 30
}

console.log(resultado)

let tarefaFilter = tarefas.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefaFilter)

console.clear()

let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]
sapatos.find((retornafind) => {
    console.log (retornafind.marca = "Puma")
})