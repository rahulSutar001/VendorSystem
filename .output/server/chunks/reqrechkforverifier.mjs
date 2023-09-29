import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const reqrechkforverifier = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user") || "");
  const getReports = await prisma.requestrecheck.findMany({
    where: {
      AuthCheck: "True",
      VerifierCheck: "False",
      VerifierId: cookie.Id
    }
  });
  const id = getReports.map((reports2) => reports2.ReportId);
  const reports = await prisma.report.findMany({
    where: {
      Id: {
        in: id
      }
    }
  }).then((sortReports) => {
    return sortReports;
  }).catch(async (err) => {
    throw await err;
  });
  return reports;
});

export { reqrechkforverifier as default };
//# sourceMappingURL=reqrechkforverifier.mjs.map
