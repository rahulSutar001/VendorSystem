
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const reports = await prisma.report.findMany({
      where: {
        Authoriser: "Rejected",
        Verifier: "Rejected",
        Admin: "Rejected",
      },
    });

    const reportIds = reports.map((report) => report.Id);

    for (const reportId of reportIds) {
      await prisma.report.updateMany({
        where: {
          Id: reportId,
        },
        data: {
          status: "Rejected",
        },
      });
    }

    return "Reports updated successfully";
  } catch (error) {
    return "" + error;
  }
});