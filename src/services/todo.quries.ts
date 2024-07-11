import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const fetchTodos = async () => {
  const { user } = await auth();
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: [{ createdAt: "desc" }],
    include: { todoTags: { include: { tag: true } } },
  });
  return todos;
};
