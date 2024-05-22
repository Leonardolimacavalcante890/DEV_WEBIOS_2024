//objetos

let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "preto",
    nome: "caio",
    sobrenome: "Maciel",
    hobbie: ["futebol", "LOL", "Tocar Guitarra"],
    //criar outro objeto
    endereco: {
        rua: "Jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "sp"
        //propriedade   valor  
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.hobbie[1])// colocar o hobbie e depois a linha ou a coluna 
console.log(pessoa.endereco)
console.log(pessoa.endereco.estado)

console.clear()

let tarefa = [
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

console.log(tarefa)
console.log(tarefa[1]) //retorna objeto
console.log(tarefa[1].nomeTarefa)//retornar uma unica propriedade de um objeto

console.clear()

let recebeJSON = JSON.stringify(pessoa)

console.log(pessoa)
console.log(recebeJSON)

var JSONITO = '{ "corDosOlhos": "verde", "altura": 1.7, "corCabelo": "preto", "nome": "caio", "sobrenome": "Maciel", "hobbie": ["futebol", "LOL", "Tocar Guitarra"], "endereco": { "rua": "Jao medeiro", "numero": 234, "cidade": "São Paulo", "estado": "sp" } }'

console.log(JSONITO)
console.log(JSON.parse(JSONITO)) // transforma JSON em objeto novamente'