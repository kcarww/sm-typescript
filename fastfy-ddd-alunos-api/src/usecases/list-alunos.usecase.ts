import { AlunoRepository } from "../repositories/aluno.repository.interface";

export class ListAlunosUseCase {
  constructor(private repo: AlunoRepository) {}

  async execute() {
    return this.repo.findAll();
  }
}
