import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const GetAllReports = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const report = await prisma.report.findMany({
      where: {
        VendorModelId: cookie.Id
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

export { GetAllReports as default };
//# sourceMappingURL=GetAllReports.mjs.map
