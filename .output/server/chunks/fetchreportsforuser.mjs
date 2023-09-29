import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetchreportsforuser = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Role: "Authoriser",
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

export { fetchreportsforuser as default };
//# sourceMappingURL=fetchreportsforuser.mjs.map
