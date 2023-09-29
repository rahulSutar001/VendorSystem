import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Getreport_to_admin_get = defineEventHandler(async (event) => {
  event.node.req;
  try {
    const decision = await prisma.decision.findMany({
      where: {
        Role: "Authoriser",
        Approve: "True"
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const findreport = await prisma.report.findMany({
      where: {
        Id: {
          in: Id
        },
        Verifier: "Approved",
        Admin: "Pending"
      }
    });
    return findreport;
  } catch (error) {
    return error;
  }
});

export { Getreport_to_admin_get as default };
//# sourceMappingURL=Getreport_to_admin.get.mjs.map
