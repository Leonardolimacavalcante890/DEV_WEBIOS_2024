//exercicio 1

let numeros = [17, 43, 8, 4, 97, 56, 29]

numeros.forEach(numeros1 => {
    if (numeros1 % 2 === 0) 
        {console.log(`È par ${numeros1}`);
}else {
   console.log(`È ímpar ${numeros1}`)};
})
//exercicio 2

let numeros2 = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61]

let resultado = numeros2.filter(filtro)
function filtro (num){
    return num > 20 && num < 80
}
console.log(resultado)