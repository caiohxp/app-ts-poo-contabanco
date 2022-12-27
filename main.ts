import Cargo from "./cargo";
import Funcionario from "./funcionario";
import Cliente from "./cliente";

// APP1

const func1 = new Funcionario("Caio", "17590730750", "21984196040", 3000, new Cargo("gerente"));
const func2 = new Funcionario("Marcos", "02302133350", "21985322266", 1212, new Cargo("atendente"));
console.log(func1, func2);

// APP2

const cliente1 = new Cliente("Paula", "12324344", "3198056505", "Sim");
console.log(cliente1)