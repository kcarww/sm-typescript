import Fastify from "fastify";
import { alunoRoutes } from "./routes/alunos";


const app = Fastify();

app.register(alunoRoutes);

app.listen({ port: 3333 }, () => {
  console.log('Server running on http://localhost:3333');
});
