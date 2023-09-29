import { defineEventHandler, getCookie, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const decision_user_approve = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user") || "");
  const postdata = await readBody(event);
  const update = await db.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "User"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: "True",
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "User"
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await create;
    } else {
      const updateDecision = db.decision.update({
        where: {
          Id: report.Id
        },
        data: {
          Approve: "True",
          Rejected: postdata.Rejected,
          Comment: postdata.Comment
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await updateDecision;
    }
  }).catch((err) => {
    throw err;
  });
  await db.report.update({
    where: {
      Id: update.ReportId
    },
    data: {
      Authoriser: "Pending"
    }
  });
  await db.requestrecheck.update({
    where: {
      ReportId: update.ReportId
    },
    data: {
      UserCheck: "True"
    }
  });
  await db.history.create({
    data: {
      DecisionId: update.Id,
      ReportId: update.ReportId,
      VendorModelId: cookie.Id,
      VendorName: cookie.Vendorname,
      Comment: update.Comment,
      Approve: update.Approve,
      Rejected: update.Rejected
    }
  });
  return {
    statusCode: 200,
    statusMessage: "Report send for Rechecking"
  };
});

export { decision_user_approve as default };
//# sourceMappingURL=decision_user_approve.mjs.map
