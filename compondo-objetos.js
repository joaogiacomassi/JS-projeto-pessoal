const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '6456843674',
    email: 'andre365@gmail.com',
    fones: ["997027225", "988063127"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha", 
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)