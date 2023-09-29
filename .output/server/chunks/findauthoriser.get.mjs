import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const findauthoriser_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma.vendor.findMany({
      where: {
        Authoriser: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

export { findauthoriser_get as default };
//# sourceMappingURL=findauthoriser.get.mjs.map
