class Funcionario implements IUsuario{
    private salario: number;
    private cargo: Cargo;
    constructor(sal:number, cargo: Cargo){
        this.salario = sal;
        this.cargo = cargo;
    }
    autenticar(): boolean {
        return true;
    }

}