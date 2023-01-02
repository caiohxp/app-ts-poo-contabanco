export default class Debito {
    private valor: number;
    private data: Date;

    constructor(valor: number, data: Date){
        this.valor = valor;
        this.data = data;
    }
    getData(){
        return this.data;
    }
    getValor(){
        return this.valor;
    }
}