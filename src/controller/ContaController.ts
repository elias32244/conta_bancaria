import { Conta } from "../model/Conta";
import { IContaRepository } from "../repository/IContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements IContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    private numero: number = 0;

    public listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset);
    }

    public procurarPorNumero(numero: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null)
            conta.visualizar();
        else
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
    }

    public atualizar(conta: Conta): void {
        let buscaConta = this.buscarNaCollection(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + conta.numero + " não foi encontrada!", colors.reset);
        }
    }

    public deletar(numero: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {
            this.listaContas.splice(this.listaContas.indexOf(conta), 1);
            console.log(colors.fg.green, "\nA Conta número: " + numero + " foi deletada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }


    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {

            if (conta.sacar(valor) == true)
                console.log(colors.fg.green, "\nO Saque na Conta número: " + numero +
                    " foi efetuado com sucesso!", colors.reset);

        } else
            console.log(colors.fg.red, "\nA Conta número: " + numero +
                " não foi encontrada!", colors.reset);
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(colors.fg.green, "\nO Depósito foi realizado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nA Conta número: " + numero + " não foi encontrada!", colors.reset);
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let origem = this.buscarNaCollection(numeroOrigem);
        let destino = this.buscarNaCollection(numeroDestino);

        if (origem != null && destino != null) {
            if (origem.sacar(valor)) {
                destino.depositar(valor);
                console.log(colors.fg.green, "\nA transferência foi realizada com sucesso!", colors.reset);
            } else
                console.log(colors.fg.red, "\nSaldo insuficiente!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nConta de Origem e/ou Destino não encontradas!", colors.reset);
        }
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNaCollection(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }

}
