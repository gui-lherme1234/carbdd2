const{ PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main(){
    const data = [
    { name: 'João da Silva', user:'joaosilva',type:'user',email:' joao.silva@example.com', password:"senha123", birthday: new Date("1985-08-25"), registration:new Date(" 2024-08-07 ")  },
    { name: 'Maria Oliveira', user:'maria.oliveira', type:'administrator', email:'maria.oliveira@example.com', password:'senha456',birthday: new Date("1990-07-14"), registration: new Date("2022-11-17") },
    { name: 'Pedro Souza', user:'pedro.souza', type:'user', email:': peter.brown@example.com', password:' password789',birthday: new Date("1982-11-30"), registration: new Date("2010-01-22") },
    { name: 'Anna White', user:'anna.white', type:'user', email:'anna.white@example.com', password:'password321',birthday: new Date("1995-01-19"), registration: new Date("2008-09-19") },
    { name: 'Charles Davis', user:'charles.davis', type:'administrator', email:' charles.davis@example.com', password:' password654',birthday: new Date(" 1988-09-05"), registration: new Date("2021-12-09") },
  ];
    await prisma.user.createMany({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();