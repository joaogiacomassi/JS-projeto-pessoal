function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const joao = new clientePoupanca("joao", "5643683511", "joao@gmail.com", 100, 200)

console.log(joao)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
    this.saldo -= valor
}

joao.depositarPoup(50)

console.log(`Após o depósito o cliente joao ficou com um saldo de R$${joao.saldo}`)
console.log(`Após o depósito você possui o valor de R$${joao.saldoPoup} em sua poupança`)

console.log(joao)





