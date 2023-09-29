import { defineEventHandler, readBody, getCookie } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const reqrechkforuser = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const cookie = JSON.parse(getCookie(event, "user") || "");
  if (postdata.recheck == "Approved") {
    const reqrechk = await db.requestrecheck.findMany({
      where: {
        UserCheck: "True",
        AuthCheck: "True",
        UserId: cookie.Id
      }
    }).then(async (reports) => {
      const id = reports.map((report) => report.ReportId);
      const getReports = await db.report.findMany({
        where: {
          Id: {
            in: id
          }
        }
      });
      return getReports;
    });
    return reqrechk;
  } else if (postdata.recheck == "Rejected") {
    const reqrechk = await db.requestrecheck.findMany({
      where: {
        UserCheck: "False",
        AuthCheck: "False",
        UserId: cookie.Id
      }
    }).then(async (reports) => {
      const id = reports.map((report) => report.ReportId);
      const getReports = await db.report.findMany({
        where: {
          Id: {
            in: id
          }
        }
      });
      return getReports;
    });
    return reqrechk;
  }
});

export { reqrechkforuser as default };
//# sourceMappingURL=reqrechkforuser.mjs.map
