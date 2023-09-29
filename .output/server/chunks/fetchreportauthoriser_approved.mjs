import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetchreportauthoriser_approved = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Approve: "True"
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const AuthoriserApprovedreport = await prisma.report.findMany({
      where: {
        Id: {
          in: Id
        }
      }
    });
    return AuthoriserApprovedreport;
  } catch (error) {
    return error;
  }
});

export { fetchreportauthoriser_approved as default };
//# sourceMappingURL=fetchreportauthoriser_approved.mjs.map
