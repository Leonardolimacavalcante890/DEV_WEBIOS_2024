//exercicio1

var uni = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]
console.log(uni)
console.log(`a Array tem ${uni.length} caracteres`)
console.log(uni[6])
var diferente1 = uni.toString()
console.log(diferente1)
var diferente2 = uni.join("/")
console.log(diferente2)
var diferente3 = uni.unshift("IOS")
console.log(uni)
console.log(diferente3)

//exercicio2

var dimensao = [
    ["HTML", 1993, "CSS", 1996],
    [ "Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
]
console.log(dimensao)
console.log(dimensao.length)
console.log(dimensao[2][1])

dimensao [1][2]= "JavaScript"
console.log(dimensao)

delete dimensao[2][2]
console.log(dimensao)
var diferente4 = dimensao.push("pipoca")
console.log(dimensao)

