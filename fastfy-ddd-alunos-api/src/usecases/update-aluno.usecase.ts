import { AlunoRepository, AlunoData } from "../repositories/aluno.repository.interface";

export class UpdateAlunoUseCase {
  constructor(private repo: AlunoRepository) {}

  async execute(matricula: string, data: Partial<AlunoData>) {
    return this.repo.update(matricula, data);
  }
}
