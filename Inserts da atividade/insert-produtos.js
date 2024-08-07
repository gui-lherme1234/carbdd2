const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
const data = [
{
name: "Samsung Galaxy S23",
descrição:
"Android 13, Display 6.1 2340x1080, Memória 256GB, 8 Core, Foto 50Mpx, Dual Sim 5G, Vídeo 8K",
preço: "R$ 2.799,00",
estoque: "342",
avaliação: "4.5",
data_cadastro: "2024-08-02",
},

{
name: "smart TV Samsung CrystaL UHD 50",
descrição:
"TVSmart, Fina, cor Preto, Processador Crystal UHD, 60Hz, Tamanho 1116.8 x 644.2",
preço: "R$ 2.739,00",
estoque: "32",
avaliação: "4.3",
data_cadastro: "2024-11-09",
},

{
name: "Samsung Galaxy Tab A 10.1 2019",
descrição:
"RedeLTE 4G, 8 Core, Memória 32GB, FULLHD, Foto 8Mpx, Android9, Display 10.1 1920x1200 ",
preço: "R$ 999,99",
estoque: "26",
avaliação: "3.9",
data_cadastro: "2024-10-04",
},

{
name: "Dell Inspiron 15 3000",
descrição:
"Preto, Plástico, AMD Ryzen 5 5500U, 6 núcleos, 8 Ram, SSD de 256GB, LED 15,6 pol FullHD, Ultra Fino",
preço: "3.149,10",
estoque: "64",
avaliação: "4.7",
data_cadastro: "2024-07-10",
},

{
name: "Xbox Series S",
descrição:
"1440p, 120fps, SSD 512GB, CPU: AMD octa-core, 6,5cm x 15,1cm x 27,5cm",
preço: "R$ 2.799,90",
estoque: "128",
avaliação: "4.9",
data_cadastro: "2024-05-12",
},
];
await prisma.user.create({ data });
}

main();