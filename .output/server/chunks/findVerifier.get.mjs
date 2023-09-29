import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const findVerifier_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma.vendor.findMany({
      where: {
        Verifier: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

export { findVerifier_get as default };
//# sourceMappingURL=findVerifier.get.mjs.map
