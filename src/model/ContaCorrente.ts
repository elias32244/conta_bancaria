import { Conta } from './Conta';

export class ContaCorrente extends Conta {

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, private _limite: number){
        super(numero, agencia, tipo, titular, saldo);
    }

    public sacar(valor: number): boolean {
        if (this.saldo + this._limite >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite: ${this._limite.toFixed(2)}`);
    }

}
