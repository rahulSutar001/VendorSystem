// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()

// export default defineEventHandler(async (event) => {
//     const cookie = JSON.parse(getCookie(event, 'user'))
//     const postdata = await readBody(event);

//    console.log(postdata);
   

    
//     const decision = await prisma.decision.upsert({
//         where:{
//           ReportId: postdata.ReportId,
//           VendorModelId: cookie.Id,
//         },
//         create: {
//             ReportId: postdata.ReportId,
//             VendorModelId: cookie.Id,
//             Comment: postdata.Comment,
//             Approve: postdata.Approve,
//             Rejected: postdata.Rejected,
//             VendorName: cookie.Vendorname,
//             Role: "Authoriser",
//         },
//         update:{
//             ReportId: postdata.ReportId,
//             VendorModelId: cookie.Id,
//             Comment: postdata.Comment,
//             Approve: postdata.Approve,
//             Rejected: postdata.Rejected,
//             VendorName: cookie.Vendorname,
//             Role: "Authoriser",
//         }
//     }).then((res) => {
//         return res
//     }).catch((err) => {
//         console.log(err);
//         throw err
//     })


//     if (postdata.Approve == "True") {
//         const reportUpdate = await prisma.report.update({
//             where: {
//                 Id: postdata.ReportId,

//             },

//             data: {
//                 Authoriser: "Approved",
//             },
//         })
//         const reqrechk = await prisma.requestrecheck.update({
//             where: {
//                 ReportId: postdata.ReportId
//             },
//             data: {
//                 UserCheck: "True",
//                 AuthCheck: "True",
//                 AuthId: cookie.Id,
//                 AuthName: cookie.Username
//             }
//         })

//     }
//     else if (postdata.Rejected == "True") {
//         const reportUpdate = await prisma.report.update({
//             where: {
//                 Id: postdata.ReportId,

//             },

//             data: {
//                 Authoriser: "Rejected",
//             },

//         })
//         const reqrechk = await prisma.requestrecheck.update({
//             where: {
//                 ReportId: postdata.ReportId
//             },
//             data: {
//                 UserCheck: "False",
//                 AuthCheck: "False",
//                 AuthId: cookie.Id,
//                 AuthName: cookie.Username
//             }
//         })
//     }

//     const history = await prisma.history.create({
//         data: {
//             DecisionId: decision.Id,
//             ReportId: postdata.ReportId,
//             VendorModelId: cookie.Id,
//             VendorName: cookie.Vendorname,
//             Comment: postdata.Comment,
//             Approve: postdata.Approve,
//             Rejected: postdata.Rejected,
//         },
//     });

//     return ;

// })

import prisma from '~/lib/prisma'
export default defineEventHandler(async (event) => {
  const get = getCookie(event, 'user') || ""
  const cookie = JSON.parse(get)
  const postdata = await readBody(event);
  console.log(postdata);
  const update = await prisma.decision.upsert({
    where: {
      ReportId: postdata.ReportId
    },
    update: {
      Approve: postdata.Approve,
      Rejected: postdata.Rejected,
      Comment: postdata.Comment
    },
    create: {
      ReportId: postdata.ReportId,
      VendorModelId: cookie.Id,
      Comment: postdata.Comment,
      Approve: postdata.Approve,
      Rejected: postdata.Rejected,
      VendorName: cookie.VendorName,
      Role: "Authoriser",
    }
  }).then(async (report) => {
    console.log({
      Decision: "Row create or Updated!",
      DecisionId: report.Id
    });
    if (postdata.Approve == "True") {
      const reportUpdate = await prisma.report.update({
        where: {
          Id: report.ReportId,
        },
        data: {
          Authoriser: "Approved",
        },
      });
      const reqrechk = await prisma.requestrecheck.update({
        where: {
          ReportId: postdata.ReportId
        },
        data: {
          UserCheck: "True",
          AuthCheck: "True",
          AuthId: cookie.Id,
          AuthName: cookie.Username
        }
      })
      const history = await prisma.history.create({
        data: {
          DecisionId: report.Id,
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          VendorName: cookie.Vendorname,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
        },
      });
      console.log({
        reportUpdated: "Report Approved",
        reportId: reportUpdate.Id,
        requestRecheckUpdated: "Report Approved",
        requestRecheckAction: {
          User: reqrechk.UserCheck,
          Auth: reqrechk.AuthCheck
        },
        HistoryId: history.Id
      });
      return {
        statusCode: 200,
        statusMessage: "Report Approved",
        reportId: reportUpdate.Id
      }
    } else {
      const reportUpdate = await prisma.report.update({
        where: {
          Id: report.ReportId,
        },
        data: {
          Authoriser: "Rejected",
        },
      });
      const reqrechk = await prisma.requestrecheck.update({
        where: {
          ReportId: postdata.ReportId
        },
        data: {
          UserCheck: "False",
          AuthCheck: "False",
          AuthId: cookie.Id,
          AuthName: cookie.Username
        }
      })
      const history = await prisma.history.create({
        data: {
          DecisionId: report.Id,
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          VendorName: cookie.Vendorname,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
        },
      });
      console.log({
        reportUpdated: "Report Rejected",
        reportId: reportUpdate.Id,
        requestRecheckUpdated: "Report Rejected",
        requestRecheckAction: {
          User: reqrechk.UserCheck,
          Auth: reqrechk.AuthCheck
        },
        HistoryId: history.Id
      });
      return {
        statusCode: 200,
        statusMessage: "Report Rejected",
        reportId: reportUpdate.Id
      }
    }
  }).catch((err) => {
    throw err
  })
  return update
})
