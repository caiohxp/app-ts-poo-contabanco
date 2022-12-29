import Cliente from "./cliente";
import ContaCorrente from "./ccorrente";
import ContaPoupanca from "./cpoupanca";

const cliente41 = new Cliente("Jorge", "12453533350", "31987490044","Sim");
cliente41.setConta(new ContaCorrente(1500, "010360206"));
cliente41.getConta("010360206").depositar(1000);
const cliente42 = new Cliente("Lucio", "98846638790","21987702625", "Não");
cliente42.setConta(new ContaPoupanca(0.01, "12345678"));
cliente42.getConta("12345678").depositar(1000);