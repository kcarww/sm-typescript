import { PrismaClient } from "@prisma/client";
import { AlunoRepository, AlunoData } from "./aluno.repository.interface";

const prisma = new PrismaClient();

export class PrismaAlunoRepository implements AlunoRepository {
  async create(data: AlunoData): Promise<AlunoData> {
    return await prisma.aluno.create({ data });
  }

  async findByMatricula(matricula: string): Promise<AlunoData | null> {
    return await prisma.aluno.findUnique({ where: { matricula } });
  }

  async findAll(): Promise<AlunoData[]> {
    return await prisma.aluno.findMany();
  }

  async update(matricula: string, data: Partial<AlunoData>): Promise<AlunoData> {
    return await prisma.aluno.update({ where: { matricula }, data });
  }

  async delete(matricula: string): Promise<void> {
    await prisma.aluno.delete({ where: { matricula } });
  }
}
