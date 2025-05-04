import { AlunoRepository, AlunoData } from "../repositories/aluno.repository.interface";

export class CreateAlunoUseCase {
  constructor(private repo: AlunoRepository) {}

  async execute(data: AlunoData) {
    return this.repo.create(data);
  }
}
