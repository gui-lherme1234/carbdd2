import { PrismaClient } from '@prisma/client';
import { Faker, pt_Br } from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
    // Deletar todos os registros antes de começar
	await prisma.faker.deleteMany();

	// Utilizar nomes brasileiros
	const faker = new Faker({ locale: [pt_Br] });

	// Tornar o resultado possível
	faker.seed(1);

	// Criação do objeto "data" que será passado para o prisma cadastrar
	const data = Array.from({ lenght: 5 }, () => {
		const fullName = faker.person.fullName();
		const birthDate = faker.date.birthdate({ min: 14,max: 20, mode: 'age'});
		const email = faker.internet.email({ firstName: fullName });
		const password = faker.internet.password();
		const state = faker.location.state();
		const bio = faker.lorem.maybe(() => faker.lorem.text(), 0.2);
		const phone = faker.phone.number();
		const avatar = faker.helpers.maybe(() => faker.image.urlPicsumPhotos(), 0.5);
		const status = faker.helpers.arrayElement([ 'Online', 'Offline' ]);
		const userName = faker.internet.userName({ firstName: fullName });
		const createAt = faker.date.past({ years: 1 });

		return { fullName, birthDate, email, password, state, bio, phone, status, userName, createAt };
	});

	await prisma.faker.createMany({ data, skipDuplicates: true });
	// console.log(data);
};

seed()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
