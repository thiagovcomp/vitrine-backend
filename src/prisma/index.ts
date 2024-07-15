import { PrismaClient, Prisma } from '@prisma/client'

const prismaClient = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  });

export default prismaClient;