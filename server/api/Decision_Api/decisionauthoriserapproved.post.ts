import db from '~/lib/prisma'
export default defineEventHandler(async (event) => {
  const get = getCookie(event, 'user') || ""
  const cookie = JSON.parse(get)
  const postdata = await readBody(event);
  
  const update = await db.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: 'Authoriser'
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
          Role: 'Authoriser'
        }
      }).then((decision) => {
      
        return decision
      }).catch(async (err) => {
        throw await err
      })
      return await create
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
       
        return decision
      }).catch(async (err) => {
        throw await err
      })
      return await updateDecision
    }
  }).catch((err) => {
    throw err
  })
  if (postdata.Approve == "True") {
    const reportUpdate = await db.report.update({
      where: {
        Id: update.ReportId,
      },
      data: {
        Authoriser: "Approved",
      },
    }).then(async (result)=>{
      if (result.Admin=="Rejected") {
          const reject = await db.report.update({
            where:{
              Id: result.Id
            },
            data:{
              status: "Pending"
            }
          })
          return reject
      } else{
        return result
      }
    })
    const reqrechk = await db.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        UserCheck: 'True',
        AuthCheck: "True",
        AuthId: cookie.Id,
        AuthName: cookie.Username
      }
    })
    const history = await db.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected,
      },
    });
  
    return {
      statusCode: 200,
      statusMessage: "Report Approved Successfully!",
      reportId: reportUpdate.Id
    }
  } else {
    const reportUpdate = await db.report.update({
      where: {
        Id: update.ReportId,
      },
      data: {
        Authoriser: "Rejected",
      },
    }).then(async (result)=>{
      if (result.Admin=="Rejected") {
          const reject = await db.report.update({
            where:{
              Id: result.Id
            },
            data:{
              status: "Rejected"
            }
          })
          return reject
      } else{
        return result
      }
    })
    const reqrechk = await db.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        UserCheck: "False",
        AuthCheck: "False",
        AuthId: cookie.Id,
        AuthName: cookie.Username
      }
    })
    const history = await db.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected,
      },
    });
   
    return {
      statusCode: 200,
      statusMessage: "Report Rejected Successfully!",
      reportId: reportUpdate.Id
    }
  }
})
