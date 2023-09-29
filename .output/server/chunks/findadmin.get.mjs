import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const findadmin_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma.vendor.findMany({
      where: {
        Admin: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

export { findadmin_get as default };
//# sourceMappingURL=findadmin.get.mjs.map
