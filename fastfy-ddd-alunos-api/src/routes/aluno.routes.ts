import { FastifyInstance } from "fastify";
import { AlunoController } from "../controllers/aluno.controller";

export async function alunoRoutes(app: FastifyInstance) {
  app.post("/alunos", AlunoController.create);
  app.get("/alunos", AlunoController.list);
  app.get("/alunos/:matricula", AlunoController.get);
  app.put("/alunos/:matricula", AlunoController.update);
  app.delete("/alunos/:matricula", AlunoController.delete);
}
