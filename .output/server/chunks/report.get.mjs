import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const report_get = defineEventHandler(async () => {
  try {
    const report = await prisma.report.findMany({
      include: {
        BillNumber: true
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

export { report_get as default };
//# sourceMappingURL=report.get.mjs.map
