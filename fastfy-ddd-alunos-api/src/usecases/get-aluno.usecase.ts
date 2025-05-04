import { AlunoRepository } from "../repositories/aluno.repository.interface";

export class GetAlunoUseCase {
  constructor(private repo: AlunoRepository) {}

  async execute(matricula: string) {
    return this.repo.findByMatricula(matricula);
  }
}
