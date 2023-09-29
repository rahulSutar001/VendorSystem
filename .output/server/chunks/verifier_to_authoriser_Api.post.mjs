import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const verifier_to_authoriser_Api_post = defineEventHandler(async (event) => {
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
        VendorModelId: true,
        ReportId: true
      }
    });
    const verifierIds = verfierrejected.map((decision2) => decision2.VendorModelId);
    const ReportIds = verfierrejected.map((decision2) => decision2.ReportId);
    return { verifierIds, ReportIds };
  } catch (error) {
    return error;
  }
});

export { verifier_to_authoriser_Api_post as default };
//# sourceMappingURL=verifier_to_authoriser_Api.post.mjs.map
