import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendor_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma.vendor.findMany();
    return vendor;
  } catch (error) {
    return error;
  }
});

export { vendor_get as default };
//# sourceMappingURL=vendor.get.mjs.map
