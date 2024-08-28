

// Selecionar todos os usuários que estão Online
const onlineUsers = await prisma.usuario.findMany({
  where: {
    status: "online",
  },
});

// Selecionar um usuário pelo seu "userName" único
const specificUserName = "nomeDeUsuario"; // Substitua pelo nome de usuário desejado
const user = await prisma.usuario.findUnique({
  where: {
    userName: specificUserName,
  },
});

// Selecionar todos os usuários que foram cadastrados no último mês
const currentDate = new Date();
const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

const newUsers = await prisma.usuario.findMany({
  where: {
    createdAt: {
      gte: oneMonthAgo,
    },
  },
});

// Selecionar todos os usuários que fazem aniversário no mês atual
const now = new Date();
const currentMonth = now.getMonth(); // Mês atual (0 = Janeiro, 11 = Dezembro)
const startOfMonth = new Date(now.getFullYear(), currentMonth, 1);
const endOfMonth = new Date(now.getFullYear(), currentMonth + 1, 0);

const usersWithBirthdayThisMonth = await prisma.usuario.findMany({
  where: {
    birthDate: {
      gte: startOfMonth,
      lte: endOfMonth,
    },
  },
});

// Selecionar todos os usuários de "São Paulo"
const usersInSaoPaulo = await prisma.usuario.findMany({
  where: {
    city: "São Paulo",
  },
});

// Selecionar todos os usuários da região Sudeste (Rio de Janeiro, São Paulo, Minas Gerais e Espírito Santo)
const southeastRegionUsers = await prisma.usuario.findMany({
  where: {
    region: {
      in: ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"],
    },
  },
});

// Selecionar todos os usuários que possuem telefone
const usersWithPhone = await prisma.usuario.findMany({
  where: {
    phone: {
      not: null,
    },
  },
});

// Selecionar todos os usuários que não possuem imagem de avatar
const usersWithoutAvatar = await prisma.usuario.findMany({
  where: {
    avatar: {
      equals: null,
    },
  },
});

// Selecionar todos os usuários cuja biografia contém uma palavra específica (por exemplo, "futebol")
const hobbyKeyword = "futebol"; // Substitua pela palavra específica desejada

const usersWithSpecificBio = await prisma.usuario.findMany({
  where: {
    bio: {
      contains: hobbyKeyword,
      mode: "insensitive", // Se você quiser que a busca seja case-insensitive
    },
  },
});
