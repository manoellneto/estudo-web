const pessoa = {
    nome: 'Manoel',
    idade: 32,
    endereco: {
        logradouro: 'Rua Tal',
        numero: 1234
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)