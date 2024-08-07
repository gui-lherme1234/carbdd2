// helo-prisma/insert-user.js //

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Hello, Prisma!",
      email: 'guilherme@gmail.com'
    },
  });
}

main();
