import { PrismaClient } from '@/prisma/generated';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // // Seed some brands
  // const brands = await prisma.brand.createMany({
  //   data: [{ name: 'Apple' }, { name: 'Samsung' }, { name: 'Xiaomi' }],
  // });
  //
  // // Seed types
  // const types = await prisma.type.createMany({
  //   data: [{ name: 'Phone' }, { name: 'Laptop' }, { name: 'Tablet' }],
  // });

  // Seed 1000 products
  const productsData = Array.from({ length: 1000 }).map(() => ({
    name: faker.commerce.productName(),
    image: faker.image.url(),
    price: Number(faker.commerce.price({ min: 100, max: 2000 })),
    rating: Number(faker.commerce.price({ min: 0, max: 5 })),
    // brandId: faker.datatype.number({ min: 1, max: 3 }),
    // typeId: faker.datatype.number({ min: 1, max: 3 }),
  }));

  await prisma.product.createMany({ data: productsData });
}

main()
  .then(() => console.log('Seeding finished'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
