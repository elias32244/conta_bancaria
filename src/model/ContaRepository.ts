import { Conta } from './Conta';

export interface ContaRepository {
  salvar(conta: Conta): void;
  atualizar(conta: Conta): void;
  remover(id: number): void;
  buscarPorId(id: number): Conta | undefined;
  listar(): Conta[];
}