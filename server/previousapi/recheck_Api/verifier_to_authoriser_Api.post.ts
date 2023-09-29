

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
        VendorModelId: true,
        ReportId: true,
      },
    });

    const verifierIds = verfierrejected.map((decision) => decision.VendorModelId);
    const ReportIds = verfierrejected.map((decision) => decision.ReportId);

    return { verifierIds, ReportIds };
  } catch (error) {
    return error;
  }
});
