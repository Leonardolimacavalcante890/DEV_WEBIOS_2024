salario.onclick = function novoSalario(){
    let salario = document.querySelector("#salario")
    let resultado = document.querySelector("#calculo")
    let porcentagem = 0.17; 
    let valor = (salario * porcentagem) / 100 + 215;
    resultado = salario + valor;
    let registro = document.createElement("h2")
    registro.innerHTML = `Seu novo salario é ${resultado}`
    document.appendChild("registro")
}