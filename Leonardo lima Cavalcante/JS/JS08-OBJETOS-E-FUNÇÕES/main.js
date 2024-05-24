//função
//if(email == "helloisa@gmail.com" && senha == "2344")
    //{return URL}
    //else{
    //    return
    //
function soma(num1, num2, num3){ //parametros
    var num1
    var num2 
    var num3
    return num1 + num2 + num3; //a soma
}

console.log(soma(2, 2, 3)) //com/ para que coloque os numeros nos parenteses
//console.log(soma) //sem parentes

function media(num4, num5, num6, num7){
    var num4
    var num5
    var num6
    var num7
    return (num4 + num5 + num6 + num7)
}

console.log(media(10, 3, 5, 7) / 4)

function nota(n1, n2, n3, n4){
    return(n1 + n2 + n3 + n4) / 4;
};

console.log(nota(6,6,6,6));

console.clear()

const media2 = (n1, n2, n3, n4) => {
      return(n1 + n2 + n3 + n4) / 4;
}
console.log(media2(5,5,5,5))

function onloadTela(){
    alert("Sua tela está carregada Bem-vindo")
    console.log("Recarregou a tela")    
}

console.clear()

const clique = () => {
    //alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão")
}