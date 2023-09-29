
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    const report = await prisma.report.findMany({
      include: {
        BillNumber: true
      }
    });
    return report;
  } catch (error) {
    return error
  }
});
