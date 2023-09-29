import { defineEventHandler, getCookie, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const newApi = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  console.log(postdata);
  await db.decision.upsert({});
  const existingDecision = await db.decision.findFirst({
    where: {
      VendorModelId: cookie.Id,
      Role: "Verifier"
    }
  });
  let update;
  if (existingDecision) {
    update = await db.decision.update({
      where: {
        Id: existingDecision.Id
      },
      data: {
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        Comment: postdata.Comment
      }
    });
  } else {
    update = await db.decision.create({
      data: {
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        VendorName: cookie.VendorName,
        Role: "Verifier"
      }
    });
  }
  console.log({
    Decision: "Row created or updated!",
    DecisionId: update.Id
  });
  if (postdata.Approve === "True") {
    const reportUpdate = await db.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Approved"
      }
    });
    const reqrechk = await db.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "True",
        VerifierCheck: "True",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    const history = await db.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    });
    console.log({
      reportUpdated: "Report Approved",
      reportId: reportUpdate.Id,
      requestRecheckUpdated: "Report Approved",
      requestRecheckAction: {
        Auth: reqrechk.AuthCheck,
        Verifier: reqrechk.VerifierCheck
      },
      HistoryId: history.Id
    });
    return {
      statusCode: 200,
      statusMessage: "Report Approved",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Rejected"
      }
    });
    const reqrechk = await db.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "False",
        VerifierCheck: "False",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    const history = await db.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    });
    console.log({
      reportUpdated: "Report Rejected",
      reportId: reportUpdate.Id,
      requestRecheckUpdated: "Report Rejected",
      requestRecheckAction: {
        Auth: reqrechk.AuthCheck,
        Verifier: reqrechk.VerifierCheck
      },
      HistoryId: history.Id
    });
    return {
      statusCode: 200,
      statusMessage: "Report Rejected",
      reportId: reportUpdate.Id
    };
  }
});

export { newApi as default };
//# sourceMappingURL=newApi.mjs.map
