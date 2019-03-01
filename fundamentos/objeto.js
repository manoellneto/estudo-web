const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 10
prod1.quantd = 50
prod1.total = prod1.preco * prod1.quantd

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    caracteristicas: {
        Tecido: 'Algodao',
        caracteristica2: {
            Tamanho: 2
        }
    }
}

console.log(prod2)