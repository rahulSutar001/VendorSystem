import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetchreportApproved_User = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const statusApprovedreport = await prisma.report.findMany({
      where: {
        VendorModelId: cookie.Id,
        status: "Approved"
      }
    });
    return statusApprovedreport;
  } catch (error) {
    return error;
  }
});

export { fetchreportApproved_User as default };
//# sourceMappingURL=fetchreportApproved_User.mjs.map
