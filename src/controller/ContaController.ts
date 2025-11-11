import { Conta } from "../model/Conta";
import { IContaRepository } from "../repository/IContaRepository";

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
        console.log(`\nA Conta número: ${conta.numero} foi criada com sucesso!`);
    }

    public procurarPorNumero(numero: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null)
            conta.visualizar();
        else
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
    }

    public atualizar(conta: Conta): void {
        let buscaConta = this.buscarNaCollection(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`\nA Conta número: ${conta.numero} foi atualizada com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${conta.numero} não foi encontrada!`);
        }
    }

    public deletar(numero: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {
            this.listaContas.splice(this.listaContas.indexOf(conta), 1);
            console.log(`\nA Conta número: ${numero} foi deletada com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {
            if (conta.sacar(valor))
                console.log(`\nO saque foi realizado com sucesso!`);
            else
                console.log(`\nSaldo insuficiente!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNaCollection(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(`\nO Depósito foi realizado com sucesso!`);
        } else {
            console.log(`\nA Conta número: ${numero} não foi encontrada!`);
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let origem = this.buscarNaCollection(numeroOrigem);
        let destino = this.buscarNaCollection(numeroDestino);

        if (origem != null && destino != null) {
            if (origem.sacar(valor)) {
                destino.depositar(valor);
                console.log(`\nA transferência foi realizada com sucesso!`);
            } else
                console.log(`\nSaldo insuficiente!`);
        } else {
            console.log(`\nConta de Origem e/ou Destino não encontradas!`);
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
