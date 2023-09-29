import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const admin_to_verfier_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma.decision.findMany({
      where: {
        AND: [
          { VendorModelId: postdata.VendorModelId },
          { Role: postdata.Role }
        ]
      }
    });
    const adminrejected = await prisma.decision.findMany({
      where: {
        AND: [
          { ReportId: postdata.ReportId },
          { Rejected: true },
          { Role: "Admin" }
        ]
      }
    });
    return { decision, adminrejected };
  } catch (error) {
    return error;
  }
});

export { admin_to_verfier_post as default };
//# sourceMappingURL=admin_to_verfier.post.mjs.map
