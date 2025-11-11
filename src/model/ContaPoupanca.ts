import { Conta } from './Conta';

export class ContaPoupanca extends Conta {

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, private _aniversario: number){
        super(numero, agencia, tipo, titular, saldo);
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Dia do aniversário: ${this._aniversario}`);
    }

}
