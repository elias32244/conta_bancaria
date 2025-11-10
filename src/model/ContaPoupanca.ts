import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  constructor(id: number, titular: string, saldo: number) {
    super(id, titular, saldo);
  }

  tipo(): string {
    return "Poupança";
  }
}