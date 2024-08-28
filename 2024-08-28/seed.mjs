import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  const statuses = ["online", "offline", "ocupado", "na escola", "no trabalho"];
  const regions = ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"];

  for (let i = 0; i < 1000; i++) {
    await prisma.user.create({
      data: {
        userName: faker.internet.userName(),
        status: faker.helpers.arrayElement(statuses),
        birthDate: faker.date.between('1970-01-01', '2000-12-31'),
        city: faker.address.city(),
        region: faker.helpers.arrayElement(regions),
        phone: faker.phone.number(),
        avatar: faker.image.avatar() || null,
        bio: faker.lorem.sentence(),
        createdAt: faker.date.past(),
      },
    });
  }

  console.log('1000 usuários criados!');
  await prisma.$disconnect();
}

seed();
