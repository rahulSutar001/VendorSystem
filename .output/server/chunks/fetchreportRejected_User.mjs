import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetchreportRejected_User = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const statusApprovedreport = await prisma.report.findMany({
      where: {
        VendorModelId: cookie.Id,
        status: "Rejected"
      }
    });
    return statusApprovedreport;
  } catch (error) {
    return error;
  }
});

export { fetchreportRejected_User as default };
//# sourceMappingURL=fetchreportRejected_User.mjs.map
