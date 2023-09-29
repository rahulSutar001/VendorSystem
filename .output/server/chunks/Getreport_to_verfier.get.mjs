import { defineEventHandler } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const Getreport_to_verfier_get = defineEventHandler(async (event) => {
  const getReport = await db.requestrecheck.findMany({
    where: {
      VerifierId: null,
      AuthCheck: "True"
    }
  }).then(async (reports) => {
    const sortedReports = reports.map((report) => report.ReportId);
    const allReports = await db.report.findMany({
      where: {
        Id: {
          in: sortedReports
        }
      },
      include: {
        BillNumber: true
      }
    });
    return allReports;
  });
  return getReport;
});

export { Getreport_to_verfier_get as default };
//# sourceMappingURL=Getreport_to_verfier.get.mjs.map
