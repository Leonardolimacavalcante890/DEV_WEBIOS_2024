let botao1 = document.querySelector("#b_01")

botao1.onclick = function(){
    document.body.style.backgroundColor = "#262525"
    imgs = document.createElement("img");
    imgs.src = '/JS/JS12-DOM-Part2/exerciciocasa/imagemUmbrella.jpg'
    document.body.appendChild(imgs);
    return imgs
}


let botao2 = document.getElementById("b_02");
botao2.onclick = function nome(){
  var nome = prompt("Qual é seu nome?")
    let usuario = document.createElement('h1')
  usuario.innerHTML =`Olá ${nome} Bem vindo a academia`
  document.body.appendChild(usuario)
  usuario.style.textAlign = "center";
}



let botao3 = document.getElementById("b_03");
var tabuada = 0;
botao3.onclick = function tabuada(){
    var numero = prompt("cite um número?")
    for(var tabuada = 0; tabuada <= 10 ; tabuada++){
    var resultado1 = (`tabuada ${numero} x ${tabuada} = ${numero * tabuada}`)
let resultado = document.createElement('h2')
  resultado.innerHTML =`${resultado1}`
  document.body.appendChild(resultado)}
}