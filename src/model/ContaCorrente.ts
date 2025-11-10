import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  constructor(id: number, titular: string, saldo: number, private limite: number = 0) {
    super(id, titular, saldo);
  }

  sacar(valor: number): void {
    if (valor <= 0) throw new Error('Valor inválido');
    if (valor > this.saldo + this.limite) throw new Error('Saldo + limite insuficiente');
    (this as any)._saldo -= valor;
  }

  tipo(): string {
    return "Corrente";
  }
}