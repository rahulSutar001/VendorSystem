
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    const branchLocations = await prisma.branchlocation.findMany();
    return branchLocations;
  } catch (error) {
    return error;
  }
});
