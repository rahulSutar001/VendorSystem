import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    
    const cookie = JSON.parse(getCookie(event, 'user')||"")
    const postdata = await readBody(event);
   
    
    
    let Id;
    const decision = await prisma.decision.create({
        data: {
            ReportId: postdata.ReportId,
            VendorModelId: cookie.Id,
            Comment: postdata.Comment,
            Approve: postdata.Approve,
            Rejected: "False",
            VendorName: cookie.Vendorname,
            Role: "User",
        },
    }).then((res) => {
        Id = res.Id
    }).catch((err) => {
        console.log(err);

    })


    if (postdata.Approve == "True") {
        const reportUpdate = await prisma.report.update({
            where: {
                Id: postdata.ReportId,

            },

            data: {
                Authoriser: "Pending",
            },
        })
        const reqrechk = await prisma.requestrecheck.update({
            where: {
                ReportId: postdata.ReportId
            },
            data: {
                UserCheck: "True",
                UserId: cookie.Id,
                UserName: cookie.Username
            }
        })

    }

    const history = await prisma.history.create({
        data: {
            DecisionId: Id,
            ReportId: postdata.ReportId,
            VendorModelId: cookie.Id,
            VendorName: cookie.Vendorname,
            Comment: postdata.Comment,
            Approve: postdata.Approve,
            Rejected: postdata.Rejected,
        },
    });

    return Id;

})
