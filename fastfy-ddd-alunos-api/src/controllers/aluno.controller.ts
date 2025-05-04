import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaAlunoRepository } from "../repositories/aluno.repository";
import { CreateAlunoUseCase } from "../usecases/create-aluno.usecase";
import { GetAlunoUseCase } from "../usecases/get-aluno.usecase";
import { ListAlunosUseCase } from "../usecases/list-alunos.usecase";
import { UpdateAlunoUseCase } from "../usecases/update-aluno.usecase";
import { DeleteAlunoUseCase } from "../usecases/delete-aluno.usecase";

const repo = new PrismaAlunoRepository();

export const AlunoController = {
  async create(req: FastifyRequest, reply: FastifyReply) {
    const usecase = new CreateAlunoUseCase(repo);
    const aluno = await usecase.execute(req.body as any);
    return reply.status(201).send(aluno);
  },

  async list(_: FastifyRequest, reply: FastifyReply) {
    const usecase = new ListAlunosUseCase(repo);
    return reply.send(await usecase.execute());
  },

  async get(req: FastifyRequest, reply: FastifyReply) {
    const { matricula } = req.params as any;
    const usecase = new GetAlunoUseCase(repo);
    const aluno = await usecase.execute(matricula);
    if (!aluno) return reply.status(404).send({ message: "Aluno não encontrado" });
    return reply.send(aluno);
  },

  async update(req: FastifyRequest, reply: FastifyReply) {
    const { matricula } = req.params as any;
    const usecase = new UpdateAlunoUseCase(repo);
    const aluno = await usecase.execute(matricula, req.body as any);
    return reply.send(aluno);
  },

  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { matricula } = req.params as any;
    const usecase = new DeleteAlunoUseCase(repo);
    await usecase.execute(matricula);
    return reply.status(204).send();
  },
};
