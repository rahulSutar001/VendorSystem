import { defineEventHandler, getCookie, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const rejetctedby_Verifier_post = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  await readBody(event);
  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: cookie.VendorModelId,
        Role: cookie.Role
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const verfierrejected = await prisma.decision.findMany({
      where: {
        ReportId: {
          in: Id
        },
        Verifier: "Rejected"
      }
    });
    return verfierrejected;
  } catch (error) {
    return error;
  }
});

export { rejetctedby_Verifier_post as default };
//# sourceMappingURL=rejetctedby_Verifier.post.mjs.map
