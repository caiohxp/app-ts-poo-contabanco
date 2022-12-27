import Pessoa from "./pessoa";
import Cargo from "./cargo";
import IUsuario from "./iusuario";
export default class Funcionario extends Pessoa implements IUsuario{
    private salario: number;
    private cargo: Cargo;
    constructor(nome: string, cpf: string, telefone: string, sal:number, cargo: Cargo){
        super(nome, cpf, telefone);
        this.salario = sal;
        this.cargo = cargo;
    }
    autenticar(): boolean {
        return true;
    }

}