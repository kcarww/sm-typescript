import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function alunoRoutes(app: FastifyInstance) {
  app.post('/alunos', async (request, reply) => {
    const { matricula, nome, idade, curso } = request.body as {
      matricula: string;
      nome: string;
      idade: number;
      curso: string;
    };

    const aluno = await prisma.aluno.create({
      data: {
        matricula,
        nome,
        idade,
        curso
      }
    });

    return reply.status(201).send(aluno);
  });

  app.get('/alunos', async () => {
    const alunos = await prisma.aluno.findMany();
    return alunos;
  });

  app.get('/alunos/:matricula', async (request, reply) => {
    console.log('Request received for aluno with matricula:', request.params);
    const { matricula } = request.params as { matricula: string };

    const aluno = await prisma.aluno.findUnique({
      where: { matricula }
    });

    if (!aluno) {
      return reply.status(404).send({ message: 'Aluno não encontrado' });
    }

    return aluno;
  });

  app.put('/alunos/:matricula', async (request, reply) => {
    const { matricula } = request.params as { matricula: string };
    const { nome, idade, curso } = request.body as {
      nome?: string;
      idade?: number;
      curso?: string;
    };

    const alunoExistente = await prisma.aluno.findUnique({
      where: { matricula }
    });

    if (!alunoExistente) {
      return reply.status(404).send({ message: 'Aluno não encontrado' });
    }

    const alunoAtualizado = await prisma.aluno.update({
      where: { matricula },
      data: {
        nome: nome ?? alunoExistente.nome,
        idade: idade ?? alunoExistente.idade,
        curso: curso ?? alunoExistente.curso,
      }
    });

    return alunoAtualizado;
  });


  app.delete('/alunos/:matricula', async (request, reply) => {
    const { matricula } = request.params as { matricula: string };

    const alunoExistente = await prisma.aluno.findUnique({
      where: { matricula }
    });

    if (!alunoExistente) {
      return reply.status(404).send({ message: 'Aluno não encontrado' });
    }

    await prisma.aluno.delete({
      where: { matricula }
    });

    return reply.status(204).send();
  });
}
