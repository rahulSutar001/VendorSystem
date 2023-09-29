// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()

// // this APi Is used to take the decision of Approve or reject the report and after takin action update the status as well in report table
// export default defineEventHandler(async (event) => {
//   const cookie = JSON.parse(getCookie(event, 'user'))


//   const postdata = await readBody(event);

//   let Id;
//   const decision = await prisma.decision.upsert({
//     where:{
//       ReportId: postdata.ReportId,
//       VendorModelId: cookie.Id,
      
//     },
//     create: {
//       ReportId: postdata.ReportId,
//       VendorModelId: cookie.Id,
//       Comment: postdata.Comment,
//       Approve: postdata.Approve,
//       Rejected: postdata.Rejected,
//       VendorName: cookie.VendorName,
//       Role: "Verifier",
//     },
//     update:{
//       ReportId: postdata.ReportId,
//       VendorModelId: cookie.Id,
//       Comment: postdata.Comment,
//       Approve: postdata.Approve,
//       Rejected: postdata.Rejected,
//       VendorName: cookie.VendorName,
//       Role: "Verifier",
//     },
//   }).then((res) => {
//     Id = res.Id
//   }).catch((err) => {
//     console.log(err);

//   })

//   if (postdata.Approve == "True") {
//     const reportUpdate = await prisma.report.update({
//       where: {
//         Id: postdata.ReportId,

//       },

//       data: {
//         Verifier: "Approved",
//       },
//     });
//     const reqrechk = await prisma.requestrecheck.update({
//       where: {
//         ReportId: postdata.ReportId
//       },
//       data: {
//         AuthCheck: "True",
//         VerifierCheck: "True",
//         VerifierId: cookie.Id,
//         VerifierName: cookie.Username
//       }
//     })
//   }
//   else if (postdata.Rejected == "True") {
//     const reportUpdate = await prisma.report.update({
//       where: {
//         Id: postdata.ReportId,

//       },

//       data: {
//         Verifier: "Rejected",
//       },

//     });
//     const reqrechk = await prisma.requestrecheck.update({
//       where: {
//         ReportId: postdata.ReportId
//       },
//       data: {
//         AuthCheck: "False",
//         VerifierCheck: "False",
//         VerifierId: cookie.Id,
//         VerifierName: cookie.Username
//       }
//     })
//   }

//   const history = await prisma.history.create({
//     data: {
//       DecisionId: Id,
//       ReportId: postdata.ReportId,
//       VendorModelId: cookie.Id,
//       VendorName: cookie.VendorName,
//       Comment: postdata.Comment,
//       Approve: postdata.Approve,
//       Rejected: postdata.Rejected,
//     },
//   });
//   return Id;


// })


import prisma from '~/lib/prisma'
export default defineEventHandler(async (event) => {
  const get = getCookie(event, 'user') || ""
  const cookie = JSON.parse(get)
  const postdata = await readBody(event);
  console.log("this is verifier data -------");
  
  console.log(postdata);
  
  const update = await prisma.decision.upsert({
    create: {
      ReportId: postdata.ReportId,
      VendorModelId: cookie.Id,
      Comment: postdata.Comment,
      Approve: postdata.Approve,
      Rejected: postdata.Rejected,
      VendorName: cookie.VendorName,
      Role: "Verifier",
    },
    update: {
      Approve: postdata.Approve,
      Rejected: postdata.Rejected,
      Comment: postdata.Comment
    },
   
     where: {
      ReportId: postdata.ReportId,
    },
   
    
  }).then(async (report) => {
    console.log({
      Decision: "Row create or Updated!",
      DecisionId: report.Id,
      
    })
    if (postdata.Approve == "True") {
      const reportUpdate = await prisma.report.update({
        where: {
          Id: report.ReportId,
        },
        data: {
          Verifier: "Approved",
        },
      });
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
          Auth: reqrechk.AuthCheck,
          Verifier: reqrechk.VerifierCheck
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
          Verifier: "Rejected",
        },
      });
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
  }).catch((err) => {
    throw err
  })
  return update
})