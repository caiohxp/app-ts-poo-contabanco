import Cargo from "./cargo";
import Funcionario from "./funcionario";
import Cliente from "./cliente";

// APP1

const func1 = new Funcionario("Caio", "17590730750", "21984196040", 3000, new Cargo("gerente"));
const func2 = new Funcionario("Marcos", "02302133350", "21985322266", 1212, new Cargo("atendente"));
console.log(func1, func2);

// APP2

const cliente1 = new Cliente("Paula", "12324344", "3198056505", "Sim");
cliente1.setEndereco("23500-444", "Avenida Paulista", "666", "fundos", "São Paulo", "SP");
cliente1.setEndereco("27550-345", "Avenida Carioca", "212", "fundos", "Rio de Janeiro", "RJ");
cliente1.setEndereco("33510-124", "Avenida Mineira", "313", "apt 201 bloco 5", "Betim", "MG");
console.log(cliente1)
cliente1.listarEnderecos();

// APP3

const clienteapp31 = new Cliente("Gustavo", "32429774660", "21987556509", "Sim");
clienteapp31.setConta(new ContaCorrente(1000, "010360206"));
clienteapp31.getConta("010360206").depositar(100);
clienteapp31.getConta("010360206").depositar(100);
clienteapp31.getConta("010360206").depositar(100);
clienteapp31.getConta("010360206").sacar(50);
console.log(clienteapp31.getConta("010360206").calcularSaldo());
