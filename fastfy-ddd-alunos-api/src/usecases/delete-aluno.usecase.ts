import { AlunoRepository } from "../repositories/aluno.repository.interface";

export class DeleteAlunoUseCase {
  constructor(private repo: AlunoRepository) {}

  async execute(matricula: string) {
    await this.repo.delete(matricula);
  }
}
