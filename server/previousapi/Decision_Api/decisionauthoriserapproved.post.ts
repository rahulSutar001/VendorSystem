import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// this APi Is used to take the decision of Approve or reject the report and after takin action update the status as well in report table
export default defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, 'user'))
  const postdata = await readBody(event);
  let Id;
  const update = await prisma.decision.findUnique({
    where: {
      ReportId: postdata.ReportId
    }
  }).then(async (res) => {
    if (!res) {
      const decision = await prisma.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          VendorName: cookie.VendorName,
          Role: "Authoriser",
        },
      }).then((res) => {
        Id = res.Id
      }).catch((err) => {
        console.log(err);

      })
    }
    else {
      if (postdata.Approve == "True") {
        const update = prisma.decision.update({
          where: {
            ReportId: postdata.ReportId
          },
          data: {
            Approve: 'True',
            Rejected:'False'
          }
        })
      }
      else if (postdata.Rejected=='True') {
         const update = prisma.decision.update({
          where: {
            ReportId: postdata.ReportId
          },
          data: {
            Approve: 'False',
            Rejected:'True'
          }
        })
      }

    }
  })

  if (postdata.Approve == "True") {
    const reportUpdate = await prisma.report.update({
      where: {
        Id: postdata.ReportId,

      },

      data: {
        Authoriser: "Approved",
      },
    });
    // Update Decision Table data


    //
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
  }
  else if (postdata.Rejected == "True") {
    const reportUpdate = await prisma.report.update({
      where: {
        Id: postdata.ReportId,

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
  }

  const history = await prisma.history.create({
    data: {
      DecisionId: Id,
      ReportId: postdata.ReportId,
      VendorModelId: cookie.Id,
      VendorName: cookie.VendorName,
      Comment: postdata.Comment,
      Approve: postdata.Approve,
      Rejected: postdata.Rejected,
    },
  });
  return Id;


})
