import * as readlineSync from "readline-sync";
import Colors from "./util/Colors";
import { Conta } from "./model/Conta";

export default class Menu {
  start() {


const conta1 = new Conta(1, 123, 1, "Adriana", 1000);
    const conta2 = new Conta(2, 456, 2, "Marcos", 500);

    console.log("\n==== Teste Conta 1 ====");
    conta1.visualizar();
    conta1.sacar(200);
    conta1.visualizar();
    conta1.depositar(500);
    conta1.visualizar();

    console.log("\n==== Teste Conta 2 ====");
    conta2.visualizar();
    conta2.sacar(800); // saque maior que o saldo -> erro
    conta2.depositar(1200);
    conta2.visualizar();

    readlineSync.question("\nPressione ENTER para ver o Menu...");


    let running = true;

    while (running) {
      console.clear();

      console.log(Colors.yellowText("*".repeat(50)));
      console.log(Colors.yellowText(" ".repeat(10) + "BANCO DO BRAZIL COM Z"));
      console.log(Colors.yellowText("*".repeat(50)));
      console.log();

      console.log(Colors.yellowText("1 - Criar Conta"));
      console.log(Colors.yellowText("2 - Listar todas as Contas"));
      console.log(Colors.yellowText("3 - Buscar Conta por Número"));
      console.log(Colors.yellowText("4 - Atualizar Dados da Conta"));
      console.log(Colors.yellowText("5 - Apagar Conta"));
      console.log(Colors.yellowText("6 - Sacar"));
      console.log(Colors.yellowText("7 - Depositar"));
      console.log(Colors.yellowText("8 - Transferir valores entre Contas"));
      console.log(Colors.yellowText("9 - Sair"));
      console.log();
      console.log(Colors.yellowText("*".repeat(50)));

      const opcao = readlineSync.question(Colors.yellowText("Escolha uma opção: "));

      switch (opcao.trim()) {
        case "1":
          console.log(Colors.yellowText("Criando conta..."));
          break;
        case "9":
          console.log(Colors.yellowText("Saindo..."));
          running = false;
          break;
        default:
          console.log(Colors.yellowText("Opção inválida!"));
      }

      if (running) readlineSync.question(Colors.yellowText("\nPressione Enter para continuar..."));
    }
  }
}

const menu = new Menu();
menu.start();
