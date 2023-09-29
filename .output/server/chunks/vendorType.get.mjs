import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorType_get = defineEventHandler(async () => {
  try {
    const vendorType = await prisma.vendorType.findMany();
    return vendorType;
  } catch (error) {
    return error;
  }
});

export { vendorType_get as default };
//# sourceMappingURL=vendorType.get.mjs.map
