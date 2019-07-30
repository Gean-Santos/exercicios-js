const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
// retornar apenas os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const convertePreco = preco => `R$ ${preco.toFixed(2).replace('.',',')}`

let resultado = carrinho.map(paraObjeto).map(apenasPreco).map(convertePreco)
console.log(resultado)