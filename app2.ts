import Cliente from "./cliente";

// Crie um cliente e adicione 3 endereços a ele
const cliente1 = new Cliente("Paula", "12324344", "3198056505", "Sim");
cliente1.setEndereco("23500-444", "Avenida Paulista", "666", "fundos", "São Paulo", "SP");
cliente1.setEndereco("27550-345", "Avenida Carioca", "212", "fundos", "Rio de Janeiro", "RJ");
cliente1.setEndereco("33510-124", "Avenida Mineira", "313", "apt 201 bloco 5", "Betim", "MG");
console.log(cliente1)
// Imprima os endereços desse cliente
cliente1.listarEnderecos();