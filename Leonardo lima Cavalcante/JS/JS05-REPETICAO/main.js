//while >>  enquanto
// Enquanto 0 < 10 vou apresentar a mensagem "0 ainda é menor que 10"

var contador = 2

//while(contador < 10) // o 10 é o limite do looping 
//{
 //   console.log(contador + " ainda é menor que 10")
 //   debugger //é um pare do looping
  //  contador++;
    // contador = contador + 1
    // contador = 0 + 1
    //contador = 1
//}

do{
    debugger
    console.log(contador + " ainda é menor que 10")
    contador++;
}
while(contador < 10)

for(var contador = 10 ; contador < 10 ; contador++){
    console.log(contador + "ainda é menor que 10")
    debugger
}


var contador = 1

 for(var contador = 0; // valor do contador
    contador <= 10; // enquanto for o contador for menor ou até igual a 10 ele será mostrado.
    contador++) // se o contador for 0 entao o acresentamento irá colocar mais 1 no CONTADOR
    {
    console.log(`2 x ${contador} //aqui é a conta em que a cada linha o acrescentador ira colocar mais 1 no valor
     = ${2 * contador}`) // aqui a conta em q é feito a multipicação com o acrescentador em que irá colocar mais 1 de valor
    debugger
    }