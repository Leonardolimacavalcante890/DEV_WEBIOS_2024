//getElementById
//innerText > Insere um novo texto
let primeiroTitulo = document.getElementById("primeiroTitulo");

primeiroTitulo.style.color = '#987654';
primeiroTitulo.innerText = 'Alanzoka';


//getElementsByClassName

let pegaClasse = document.getElementsByClassName('getClass'); //3

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'purple';
}

console.log(pegaClasse);
console.clear()

//getElementByName

let byName = document.getElementsByName('filho');

console.log(byName);

byName.forEach(funcao)

// [90, 60, 50]
// primeiro parametro é referente aos valores do meu Array
//segundo parametro referente ao indice
function funcao (byName){
    return byName.style.color = "orange"
}

function funcao(cont, indice) {
    return byName[indice].style.color = "gold"
}

console.clear()

//getElementsByTagName

let byTagName = document.getElementsByTagName("p")

console.log(byTagName)

for(c = 0; c < byTagName.length; c++){// posição 1 e dps posição 2
    byTagName[c].style.color = '#ff4500'
    byTagName[c].style.fontSize = "20px"
    byTagName[c].style.boxShadow = "5px 5px 5px #000000"
    byTagName[c].style.borderRadius = "5px"
    byTagName[c].style.textAlign = "center"
    byTagName[c].style.display
    if(c % 2) byTagName[c].style.backgroundColor = "#ffff00"
    else if(c % 2 == 0) byTagName[c].style.backgroundColor = "#ff111f"
    else byTagName[c].style.color = "#ff4500"
}

let removendo = document.getElementById("remove1")
removendo.remove()

console.log(byTagName);

let recebelista = document.getElementById("pailista")

recebelista.style.listStyle = "none"


