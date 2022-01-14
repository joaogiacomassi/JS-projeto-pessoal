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

const ju = new clientePoupanca("Ju","5643678465","ju123@gmail.com",100,200)

console.log(ju)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
    this.saldo -= valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)
console.log(ju.saldo)