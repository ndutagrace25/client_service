import prisma from "../src/shared/prismaClient";

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.customer.deleteMany();
//   await prisma.business.deleteMany();
});
