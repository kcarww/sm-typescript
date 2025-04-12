import fastify, { FastifyRequest, FastifyReply } from "fastify";
import prismaPlugin from "./plugins/prisma";
import { CreateUserDTO, UpdateUserDTO, UserParamsDTO } from "./dtos/users.dto";

const app = fastify();

app.register(prismaPlugin);

// Listar todos usuários
app.get("/users", async (req, reply) => {
  const users = await app.prisma.user.findMany();
  return users;
});

// Buscar usuário específico
app.get<{ Params: UserParamsDTO }>("/users/:id", async (req, reply) => {
  const id = Number(req.params.id);

  const user = await app.prisma.user.findUnique({ where: { id } });

  if (!user) {
    reply.status(404);
    return { error: "Usuário não encontrado!" };
  }

  return user;
});

// Criar novo usuário
app.post<{ Body: CreateUserDTO }>("/users", async (req, reply) => {
  const { name, email } = req.body;

  const newUser = await app.prisma.user.create({
    data: { name, email },
  });

  reply.status(201);
  return newUser;
});

// Atualizar usuário existente
app.put<{ Params: UserParamsDTO; Body: UpdateUserDTO }>(
  "/users/:id",
  async (req, reply) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    try {
      const updatedUser = await app.prisma.user.update({
        where: { id },
        data: { name, email },
      });

      return updatedUser;
    } catch {
      reply.status(404);
      return { error: "Usuário não encontrado!" };
    }
  }
);

// Deletar usuário existente
app.delete<{ Params: UserParamsDTO }>("/users/:id", async (req, reply) => {
  const id = Number(req.params.id);

  try {
    await app.prisma.user.delete({ where: { id } });
    return { message: "Usuário deletado com sucesso!" };
  } catch {
    reply.status(404);
    return { error: "Usuário não encontrado!" };
  }
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
