export default class Credito {
    private valor: number;
    private data: Date;

    constructor(valor: number, data: Date){
        this.valor = valor;
        this.data = data;
    }
    getData(){
        return this.data.getTime();
    }
    getValor(){
        return this.valor;
    }
}