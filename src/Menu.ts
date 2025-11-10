import readlineSync from 'readline-sync';
import { ContaCorrente } from './model/ContaCorrente';
import { ContaPoupanca } from './model/ContaPoupanca';
import { Conta } from './model/Conta';
import { ContaRepository } from './model/ContaRepository';

class ContaArrayRepository implements ContaRepository {
  private contas: Conta[] = [];

  salvar(conta: Conta): void { this.contas.push(conta); }
  atualizar(conta: Conta): void { const i = this.contas.findIndex(c=>c.id===conta.id); if(i!==-1) this.contas[i]=conta; }
  remover(id: number): void { this.contas = this.contas.filter(c=>c.id!==id); }
  buscarPorId(id: number): Conta | undefined { return this.contas.find(c=>c.id===id); }
  listar(): Conta[] { return this.contas; }
}

export default class Menu {
  private repo = new ContaArrayRepository();

  start(): void {
    while (true) {
      console.log("\n=== MENU CONTA BANCÁRIA ===");
      console.log("1 - Criar Conta Corrente");
      console.log("2 - Criar Conta Poupança");
      console.log("3 - Listar Contas");
      console.log("4 - Sair");
      const opc = readlineSync.questionInt("Escolha: ");
      switch (opc) {
        case 1: this.criarCC(); break;
        case 2: this.criarCP(); break;
        case 3: this.listar(); break;
        case 4: return;
        default: console.log("Opção inválida");
      }
    }
  }

  private gerarId(): number { return this.repo.listar().length + 1; }

  private criarCC(): void {
    const titular = readlineSync.question("Titular: ");
    const saldo = readlineSync.questionFloat("Saldo inicial: ");
    const limite = readlineSync.questionFloat("Limite: ");
    const conta = new ContaCorrente(this.gerarId(), titular, saldo, limite);
    this.repo.salvar(conta);
    console.log("Conta Corrente criada!");
  }

  private criarCP(): void {
    const titular = readlineSync.question("Titular: ");
    const saldo = readlineSync.questionFloat("Saldo inicial: ");
    const conta = new ContaPoupanca(this.gerarId(), titular, saldo);
    this.repo.salvar(conta);
    console.log("Conta Poupança criada!");
  }

  private listar(): void {
    console.log(this.repo.listar());
  }
}

new Menu().start();