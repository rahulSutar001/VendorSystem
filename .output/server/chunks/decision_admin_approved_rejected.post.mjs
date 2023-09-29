import { defineEventHandler, getCookie, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const decision_admin_approved_rejected_post = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  const update = await db.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "Admin"
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
          Role: "Admin"
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
        Admin: "Approved",
        status: "Approved"
      }
    });
    await db.requestrecheck.delete({
      where: {
        ReportId: update.ReportId
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
        Admin: "Rejected"
      }
    });
    await db.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        VerifierCheck: "False",
        AdminCheck: "False",
        AdminId: cookie.Id,
        AdminName: cookie.Username
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

export { decision_admin_approved_rejected_post as default };
//# sourceMappingURL=decision_admin_approved_rejected.post.mjs.map
