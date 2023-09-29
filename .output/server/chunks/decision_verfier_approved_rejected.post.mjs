import { defineEventHandler, getCookie, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const decision_verfier_approved_rejected_post = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  const update = await db.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "Verifier"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "Verifier"
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
          Approve: postdata.Approve,
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
  if (postdata.Approve == "True") {
    const reportUpdate = await db.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Verifier: "Approved",
        Admin: "Pending"
      }
    });
    await db.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        AuthCheck: "True",
        VerifierCheck: "True",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
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
      statusMessage: "Report Approved Successfully!",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Verifier: "Rejected"
      }
    });
    await db.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        AuthCheck: "False",
        VerifierCheck: "False",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
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
      statusMessage: "Report Rejected Successfully!",
      reportId: reportUpdate.Id
    };
  }
});

export { decision_verfier_approved_rejected_post as default };
//# sourceMappingURL=decision_verfier_approved_rejected.post.mjs.map
