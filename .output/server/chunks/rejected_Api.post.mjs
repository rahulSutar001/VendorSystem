import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const rejected_Api_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: postdata.VendorModelId,
        Role: postdata.Role
      },
      select: {
        ReportId: true
      }
    });
    const reportIds = decision.map((decision2) => decision2.ReportId);
    const verfierrejected = await prisma.decision.findMany({
      where: {
        ReportId: {
          in: reportIds
        },
        Role: "verifier",
        Rejected: "True"
      },
      select: {
        ReportId: true
      }
    });
    const id = verfierrejected.map((decision2) => decision2.ReportId);
    const verfierrejectedfromreport = await prisma.report.findMany({
      where: {
        Id: {
          in: id
        },
        select: {
          Id: true
        }
      }
    });
    return verfierrejectedfromreport;
  } catch (error) {
    return error;
  }
});

export { rejected_Api_post as default };
//# sourceMappingURL=rejected_Api.post.mjs.map
