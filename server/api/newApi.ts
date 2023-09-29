import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const get = getCookie(event, 'user') || ""
  const cookie = JSON.parse(get)
  const postdata = await readBody(event)
  console.log(postdata)

  const upsert = await prisma.decision.upsert({
    
  })

  const existingDecision = await prisma.decision.findFirst({
    where: {
      VendorModelId: cookie.Id,
      Role: "Verifier"
    }
  })

  let update
  if (existingDecision) {
    // Verifier has already taken an action, update existing record
    update = await prisma.decision.update({
      where: {
        Id: existingDecision.Id
      },
      data: {
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        Comment: postdata.Comment
      }
    })
  } else {
    // Verifier has not taken any action, create a new row
    update = await prisma.decision.create({
      data: {
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        VendorName: cookie.VendorName,
        Role: "Verifier"
      }
    })
  }

  console.log({
    Decision: "Row created or updated!",
    DecisionId: update.Id
  })

  if (postdata.Approve === "True") {
    const reportUpdate = await prisma.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Approved"
      }
    })

    const reqrechk = await prisma.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "True",
        VerifierCheck: "True",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    })

    const history = await prisma.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    })

    console.log({
      reportUpdated: "Report Approved",
      reportId: reportUpdate.Id,
      requestRecheckUpdated: "Report Approved",
      requestRecheckAction: {
        Auth: reqrechk.AuthCheck,
        Verifier: reqrechk.VerifierCheck
      },
      HistoryId: history.Id
    })

    return {
      statusCode: 200,
      statusMessage: "Report Approved",
      reportId: reportUpdate.Id
    }
  } else {
    const reportUpdate = await prisma.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Rejected"
      }
    })

    const reqrechk = await prisma.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "False",
        VerifierCheck: "False",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    })

    const history = await prisma.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    })

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
    }
  }
  return update
})