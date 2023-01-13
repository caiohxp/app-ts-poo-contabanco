import Funcionario from "../dominio/funcionario";
import Cargo from "../dominio/cargo";

// Crie dois funcionários do banco, um gerente e um atendente.

const func1 = new Funcionario("Caio", "17590730750", "21984196040", 3000, new Cargo("gerente"));
const func2 = new Funcionario("Marcos", "02302133350", "21985322266", 1212, new Cargo("atendente"));
console.log(func1, func2);