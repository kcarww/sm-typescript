import Fastify from "fastify";
import { alunoRoutes } from "./routes/aluno.routes";

const app = Fastify();

app.register(alunoRoutes);

app.listen({ port: 3000 }, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});