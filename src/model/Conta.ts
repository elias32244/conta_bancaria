export abstract class Conta {
  constructor(
    public readonly id: number,
    public titular: string,
    protected _saldo: number
  ) {}

  get saldo(): number {
    return this._saldo;
  }

  depositar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido');
    this._saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido');
    if (valor > this._saldo) throw new Error('Saldo insuficiente');
    this._saldo -= valor;
  }

  abstract tipo(): string;
}