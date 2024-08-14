const { PrismaClient } = require('@prisma/client');
const { fakerPT_BR: faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

async function main() {
    const data = Array.from({ lenght: 10 }).map(function() {
        const name = faker.person.firstName();
        const username
        const type
        const email
        const password
        const birthday
        const createAt

        return { name, username, demais campos...}
    });

    await prisma.user.createMany({ data });
}

main();