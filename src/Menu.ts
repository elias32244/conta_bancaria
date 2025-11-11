import * as read from "readline-sync";
import { colors } from "./util/Colors";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";

export function main() {

    let opcao: number;
    const tiposContas = ["Conta Corrente", "Conta Poupança"];

    const contas = new ContaController();

    do {

        console.log(colors.bg.black + colors.fg.yellow +
"*****************************************************\n" +
"                BANCO DO BRAZIL COM Z\n" +
"*****************************************************\n" + colors.reset);

        console.log(colors.fg.yellow +
"1 - Criar Conta\n" +
"2 - Listar todas as Contas\n" +
"3 - Buscar Conta por Numero\n" +
"4 - Atualizar Dados da Conta\n" +
"5 - Apagar Conta\n" +
"6 - Sacar\n" +
"7 - Depositar\n" +
"8 - Transferir valores entre Contas\n" +
"9 - Sair\n" + colors.reset);

        console.log(colors.bg.black + colors.fg.yellow +
"*****************************************************" + colors.reset);

        opcao = read.questionInt(colors.fg.yellow + "Entre com a opção desejada: " + colors.reset);
        console.log();

        switch (opcao) {

            case 1:
                console.log(colors.fg.yellow + "Criar Conta\n" + colors.reset);

                let agencia = read.questionInt("Digite o Número da agência: ");
                let titular = read.question("Digite o Nome do Titular da conta: ");

                let tipo = read.keyInSelect(tiposContas, "Digite o tipo da Conta: ") + 1;
                let saldo = read.questionFloat("Digite o Saldo da conta (R$): ");

                if (tipo === 1) {
                    let limite = read.questionFloat("Digite o Limite da Conta (R$): ");
                    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                } else {
                    let aniversario = read.questionInt("Digite o Dia do aniversário da Conta Poupança: ");
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                }
                break;

            case 2:
                contas.listarTodas();
                break;

            case 3:
                let numero = read.questionInt("Digite o número da Conta: ");
                contas.procurarPorNumero(numero);
                break;

            case 4:
                console.log("Atualizar Dados da Conta\n");
                let numeroAtualizar = read.questionInt("Digite o número da Conta: ");
                let conta = contas.buscarNaCollection(numeroAtualizar);

                if (conta != null) {

                    let agenciaAtualizada = read.questionInt("Número da Agência: ");
                    let titularAtualizado = read.question("Nome do Titular: ");
                    let saldoAtualizado = read.questionFloat("Saldo (R$): ");

                    if (conta.tipo === 1) {
                        let limiteAtualizado = read.questionFloat("Limite da Conta (R$): ");
                        contas.atualizar(new ContaCorrente(numeroAtualizar, agenciaAtualizada, conta.tipo, titularAtualizado, saldoAtualizado, limiteAtualizado));
                    } else {
                        let aniversarioAtualizado = read.questionInt("Dia do Aniversário da Conta: ");
                        contas.atualizar(new ContaPoupanca(numeroAtualizar, agenciaAtualizada, conta.tipo, titularAtualizado, saldoAtualizado, aniversarioAtualizado));
                    }

                    console.log("\nConta Atualizada com Sucesso!");

                } else {
                    console.log(`\nA Conta número ${numeroAtualizar} não foi encontrada!`);
                }
                break;

            case 5:
                let numeroDelete = read.questionInt("Digite o número da Conta: ");
                contas.deletar(numeroDelete);
                break;

            case 6:
                let numeroSaque = read.questionInt("Digite o número da Conta: ");
                let valorSaque = read.questionFloat("Digite o valor do Saque (R$): ");
                contas.sacar(numeroSaque, valorSaque);
                break;

            case 7:
                let numeroDeposito = read.questionInt("Digite o número da Conta: ");
                let valorDeposito = read.questionFloat("Digite o valor do Depósito (R$): ");
                contas.depositar(numeroDeposito, valorDeposito);
                break;

            case 8:
                let numeroOrigem = read.questionInt("Digite o número da Conta de Origem: ");
                let numeroDestino = read.questionInt("Digite o número da Conta de Destino: ");
                let valorTransferencia = read.questionFloat("Digite o valor da Transferência (R$): ");
                contas.transferir(numeroOrigem, numeroDestino, valorTransferencia);
                break;

            case 9:
                console.log(colors.fg.yellow + "\nBanco do Brazil com Z - Obrigado!" + colors.reset);
                break;

            default:
                console.log(colors.fg.red + "\nOpção Inválida!" + colors.reset);
                break;
        }

        if (opcao !== 9) {
            console.log(colors.fg.yellow + "\nPressione ENTER para continuar..." + colors.reset);
            read.question();
        }

    } while (opcao !== 9);

}

main();
