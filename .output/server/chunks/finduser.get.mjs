import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const finduser_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma.vendor.findMany({
      where: {
        User: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

export { finduser_get as default };
//# sourceMappingURL=finduser.get.mjs.map
