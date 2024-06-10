class contaBancaria {
    constructor(nome, idade, salário, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade;
        this.salário = salário;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroconta = numeroConta;
    }
    contaPoupanca(){
    let porcentagem = 1.5;
    let valor = (this.salário * porcentagem) / 100;
    let novoSalario = this.salário - valor;
    return{
        contaBancaria: this,   
        novoSalario: novoSalario   
      }


    }
    contaCorrente(){
    let porcentagem = 3.6;
    let valor = (this.salário * porcentagem) / 100;
    let novoSalario = this.salário - valor;
    return{
        contaBancaria: this,   
        novoSalario: novoSalario   
      }
    }
    contaEstudante(){
    let porcentagem = 1.2;
    let valor = (this.salário * porcentagem) / 100;
    let novoSalario = this.salário - valor;
    return{
        contaBancaria: this,   
        novoSalario: novoSalario   
      }
    }
}

var usuariocontaPoupanca = new contaBancaria("Leonardo", 33, 1412, "Masculino", "Inter", "Poupança", 123456);
var usuariocontaCorrente = new contaBancaria("Leonardo", 33, 999, "Masculino", "Inter", "Corrente", 123456);
var usuariocontaEstudante = new contaBancaria("Leonardo", 33, 1200, "Masculino", "Bradesco", "Estudante", 123456);

console.log("Conta Poupança:", usuariocontaPoupanca.contaPoupanca())
console.log("Conta Corrente:", usuariocontaCorrente.contaCorrente())
console.log("Conta Estudante:", usuariocontaEstudante.contaEstudante())
