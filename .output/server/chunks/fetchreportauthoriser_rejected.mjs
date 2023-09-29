import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetchreportauthoriser_rejected = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Rejected: "True"
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

export { fetchreportauthoriser_rejected as default };
//# sourceMappingURL=fetchreportauthoriser_rejected.mjs.map
