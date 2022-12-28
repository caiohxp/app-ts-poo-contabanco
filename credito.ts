export default class Credito {
    private valor: number;
    private data: Date;

    constructor(valor: number, data = new Date()){
        this.valor = valor;
        this.data = data;
    }

    getValor(){
        return this.valor;
    }
}