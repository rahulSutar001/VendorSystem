import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorcategoy_get = defineEventHandler(async () => {
  try {
    const vendorcategory = await prisma.vendorCategory.findMany();
    return vendorcategory;
  } catch (error) {
    return error;
  }
});

export { vendorcategoy_get as default };
//# sourceMappingURL=vendorcategoy.get.mjs.map
