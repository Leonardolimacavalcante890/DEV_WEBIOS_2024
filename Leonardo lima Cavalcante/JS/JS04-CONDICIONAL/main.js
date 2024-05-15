//if >> se // else >> senão
//se todos os alunos estiverem com a blusa e o crachá entao todos recebem 10
//o que estiver dentro das chaves será executado

var todoDeCracha = false;

if(todoDeCracha == true){
   console.log("todos recebem nota 10 em JS")
}
else{
    console.log("Todos recebem nota 0 em JS")
}

console.clear()

var numero1 = 12
var numero2 = 10

//if(numero1 > numero2){
 //   console.log("numero 1 é maior que o numero 2")
//}

//else{
 //  console.log("O numero 1 é menor que o numero 2")
//}

//if(numero1 > numero2){
//    console.log(`O número ${numero1} é maior que o número ${numero2}`)
//}

numero1 > numero2 ? 
console.log("numero1 é maior") : console.log("numero2 é menor");

console.clear()

//gerente / estagio / CEO
//voce é gerente >> No perfil de gerente aparece todas as informações dos estagiarios
//nome e senha
let mes = "outubro";

if(mes == "janeiro"){
    console.log("È verão")
}

else if(mes == "junho"){
    console.log("È outono")
}

else if(mes == "outubro"){
    console.log("È primavera")
}// sempre ficará no meio

else{
    console.log("È inverno")
}// ele sempre ficará por ultimo

console.clear()

switch(mes){
    //guardo a expressao que quero validar

    case "janeiro":
    console.log("È verão")
    break; // parar a leitura java como se fosse uma chave {}

    case "junho":
    console.log("È outono")
    break;

    case "outubro":
    console.log("È primavera")
    break;

    default: // else
    console.log("È inverno")   
}


