import { drugs } from './drugs';
import { staffs } from './staffs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const createStaff = await prisma.staff.createMany({
    data: staffs,
  });

  const createDrug = await prisma.drugDisplay.createMany({
    data: drugs,
  });
  console.log(`Seeding finished.`);
  console.log({ createStaff, createDrug });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
