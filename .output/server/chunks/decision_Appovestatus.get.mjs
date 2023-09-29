import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const decision_Appovestatus_get = defineEventHandler(async (event) => {
  try {
    const reports = await prisma.report.findMany({
      where: {
        Authoriser: "Approved",
        Verifier: "Approved",
        Admin: "Approved"
      }
    });
    const reportIds = reports.map((report) => report.Id);
    for (const reportId of reportIds) {
      await prisma.report.updateMany({
        where: {
          Id: reportId
        },
        data: {
          status: "Approved"
        }
      });
    }
    return "Reports updated successfully";
  } catch (error) {
    return error;
  }
});

export { decision_Appovestatus_get as default };
//# sourceMappingURL=decision_Appovestatus.get.mjs.map
