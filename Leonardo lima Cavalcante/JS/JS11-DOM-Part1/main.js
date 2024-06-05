//dom
//link com o arquivo HTML
//acessar o DOM
//document.head ou .body .div feito  // suficiente para acessar o HTML

//document.body.style.backgroundColor = "green"

//se for 1 > São Paulo (cor de fundo vermelho) senão 0 Corithians (cor de fundo preto)
document.title = "times"

var time = prompt("Qual o nome do time?")
if(time == "Sao Paulo"){
    alert("O time é o São Paulo")
    document.body.style.backgroundColor = "red"
    //creatElement > serve para criar uma tag no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    // innerHTML > Inserir uma informação no HTML


}else if(time == "Corithians"){
    alert("O time é o Corithians")
    document.body.style.backgroundColor = "Black"
    nomeTime.body.style.color = "white"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corithians - Ronaldo"
    document.body.appendChild(nomeTime)


}else if(time == "Palmeiras"){
    alert("O time é o Palmeiras")
    document.body.style.backgroundColor = "pink"


}else{
    alert("Não sei qual é esse time")
}

//window.alert("bem-Vindo ao caos");

//window.confirm("Deseja realmente sair desse jogo?");// escolher ok ou cancelar

//window.prompt("Deseja realmente sair desse jogo?");

// var teste = prompt("Deseja realmente sair desse jogo?");
// console.log(teste)
//window.open("Nao sei")