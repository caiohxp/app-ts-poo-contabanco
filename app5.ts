import ContaCorrente from "./ccorrente";
import Cliente from "./cliente";
import ContaPoupanca from "./cpoupanca";

const cliente5 = new Cliente("Darwin", "131313355566", "8993566435", "Sim");
cliente5.setConta(new ContaPoupanca(0.01, "13579753"));
for(let i = 1; i<=12; i++){
    cliente5.getConta("13579753").depositar(200,new Date(`2022-${i}-02`));
}
cliente5.getConta("13579753").sacar(100,new Date("2022-03-05"));
cliente5.getConta("13579753").sacar(200,new Date("2022-07-08"));
//cliente5.getConta("13579753").depositar(200,new Date(`2020-05-01`));
//console.log((cliente5.getConta("13579753") as ContaPoupanca).calcularRendimento())
console.log("Seu saldo até este mês é R$",cliente5.getConta("13579753").calcularSaldo())