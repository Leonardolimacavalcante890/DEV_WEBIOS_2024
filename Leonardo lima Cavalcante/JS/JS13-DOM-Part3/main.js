var itensClasse = document.getElementsByClassName('item')
console.log(itensClasse)

// querySelectorAll ele pega todo o elemento que esta na lista
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector pega apenas o primeiro elemento que ele encontra na lista
var lista = document.querySelector('#lista');

console.log(lista);

var primeiraLista = document.querySelector('ul');

console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');

console.log(span);