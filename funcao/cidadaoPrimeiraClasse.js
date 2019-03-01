// Função em JS é FIRST CLASS Objetct (citizens)
// HIGHER ORDER FUNCTION

// criar de forma literal
function fun1() {}

// armazenar em uma variavel
const fun2 = function () {}

// armanzenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um  atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// funcao pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(5, 6)
cincoMais(4)