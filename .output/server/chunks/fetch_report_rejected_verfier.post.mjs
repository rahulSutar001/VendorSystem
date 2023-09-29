import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fetch_report_rejected_verfier_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma.decision.findMany({
      where: {
        AND: [
          { VendorModelId: postdata.AuthoriserId }
        ]
      }
    });
    const findreport = await prisma.decision.findMany({
      where: {
        AND: [
          { ReportId: postdata.ReportId },
          { Role: "Verifier" },
          { Rejected: true }
        ]
      }
    });
    return { decision, findreport };
  } catch (error) {
    return error;
  }
});

export { fetch_report_rejected_verfier_post as default };
//# sourceMappingURL=fetch_report_rejected_verfier.post.mjs.map
