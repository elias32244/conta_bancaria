import { Conta } from "../src/model/Conta";
import { ContaCorrente } from "../src/model/ContaCorrente";
import { ContaPoupanca } from "../src/model/ContaPoupanca";

// Teste rápido
const conta = new Conta(1, 123, 1, "Adriana", 10000);
conta.visualizar();
conta.sacar(10500);
conta.visualizar();
conta.depositar(5000);
conta.visualizar();

const contacorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
contacorrente.visualizar();
contacorrente.sacar(2000);
contacorrente.visualizar();
contacorrente.depositar(1000);
contacorrente.visualizar();

const contapoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
contapoupanca.visualizar();
contapoupanca.sacar(200);
contapoupanca.visualizar();
contapoupanca.depositar(1000);
contapoupanca.visualizar();
