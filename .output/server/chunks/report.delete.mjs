import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const report_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    let report = null;
    report = await prisma.report.delete({
      where: {
        Id: postData.Id
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

export { report_delete as default };
//# sourceMappingURL=report.delete.mjs.map
