export abstract class Conta {
    constructor(
        private _numero: number,
        private _agencia: number,
        private _tipo: number,
        private _titular: string,
        protected _saldo: number
    ) {}

    public get numero(): number { return this._numero; }
    public get agencia(): number { return this._agencia; }
    public get tipo(): number { return this._tipo; }
    public get titular(): string { return this._titular; }
    public get saldo(): number { return this._saldo; }

    public set numero(numero: number) { this._numero = numero; }
    public set agencia(agencia: number) { this._agencia = agencia; }
    public set tipo(tipo: number) { this._tipo = tipo; }
    public set titular(titular: string) { this._titular = titular; }
    public set saldo(saldo: number) { this._saldo = saldo; }

    public sacar(valor: number): boolean {
        if(this._saldo >= valor){
            this._saldo -= valor;
            return true;
        }
        return false;
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }

    public visualizar(): void {
        console.log("*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log(`Número da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: ${this._saldo.toFixed(2)}`);
    }
}
