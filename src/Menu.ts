import * as readlineSync from "readline-sync";
import Colors from "./util/Colors";

export default class Menu {
  start() {
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
