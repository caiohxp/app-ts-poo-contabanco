import Cliente from "../dominio/cliente";
import ContaCorrente from "../dominio/conta-corrente";

// Crie um cliente que possua uma ContaCorrente
const clienteapp31 = new Cliente("Gustavo", "32429774660", "21987556509", "Não");
clienteapp31.setConta(new ContaCorrente(1000, "010360206"));
// Efetue três depósitos de 100 nessa ContaCorrente
clienteapp31.getConta("010360206").depositar(100);
clienteapp31.getConta("010360206").depositar(100, new Date("2010-09-01"));
clienteapp31.getConta("010360206").depositar(100);
// Efetue um saque de 50 reais nessa ContaCorrente
clienteapp31.getConta("010360206").sacar(50);
console.log(clienteapp31.getConta("010360206"));
// Imprima o valor do saldo dessa ContaCorrente
console.log(clienteapp31.getConta("010360206").calcularSaldo());

