

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const postdata = await readBody(event);

  try {
    const decision = await prisma.decision.findMany({
      where: {
        VendorModelId: postdata.VendorModelId,
        Role: postdata.Role,
      },
      select: {
        ReportId: true,
      },
    });

    const reportIds = decision.map((decision) => decision.ReportId);

    const verfierrejected = await prisma.decision.findMany({
      where: {
        ReportId: {
          in: reportIds,
        },
        Role: "verifier",
        Rejected: "True",
      },
      select: {
        ReportId: true,
      },
    });
    const id = verfierrejected.map((decision) => decision.ReportId);

    const verfierrejectedfromreport = await prisma.report.findMany({
      where: {
        Id: {
          in: id,
        },
        select: {
          Id: true,
        }
      },
    });
    return verfierrejectedfromreport;
  } catch (error) {
    return error;
  }
});
