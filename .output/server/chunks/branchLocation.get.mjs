import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const branchLocation_get = defineEventHandler(async () => {
  try {
    const branchLocations = await prisma.branchlocation.findMany();
    return branchLocations;
  } catch (error) {
    return error;
  }
});

export { branchLocation_get as default };
//# sourceMappingURL=branchLocation.get.mjs.map
