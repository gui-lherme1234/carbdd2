const{ PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main(){
    const data = [
    { name: 'Smeels Like Teen Spirit',artist:'Nirvana', album:'Nevermind',gener:'rock', single: false, year:'1991', time: 5.01  },
    { name: 'Até durou', artist:'Péricles', album:'Em sua direção', gener:'Pagode', single: false, year: 2018, time:3.31 }, 
    { name: 'Do not Matter', artist:'Akon', album:'Konvicted', gener:'Pop', single:false, year:2007, time:4.20},
    { name: 'Billie Jean', artist: ' Michael Jackson',album:'Thriller', gener:'Dance-pop', single:false, year:1982,time:4.56  },
    { name: 'Bohemian Rhapsody', artist: 'Queen', album:' A Night at the Opera',gener:' Rock', single:false,year:1975,time:5.55 }
  ];
    await prisma.user.createMany({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();