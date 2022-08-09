// import { PrismaClient, Prisma, LineUser, Client } from '@prisma/client';
// const prisma = new PrismaClient();

// // モデル投入用のデータ定義
// const clientData = {
//   name: 'test',
//   description: 'text',
//   tel: '0900000000',
//   stripeCustomerId: 'test',
//   email: 'hoge@hoge.com',
// };

// const lineUserData = {
//   lineId: 'testId',
//   lineName: 'つよし',
//   status: 'active',
//   language: 'jp',
//   lineImage: 'imageUrl',
//   stripeCustomerId: 'test',
//   statusMessage: 'status message',
//   clientId: 1,
// };

// const doSeed = async () => {
//   const createClient = await prisma.client.create({
//     data: clientData,
//   });

//   const createLineUser = await prisma.lineUser.create({
//     data: lineUserData,
//   });
// };

// const main = async () => {
//   console.log(`Start seeding ...`);

//   await doSeed();

//   console.log(`Seeding finished.`);
// };

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
