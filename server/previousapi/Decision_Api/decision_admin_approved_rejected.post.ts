import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// this APi Is used to take the decision of Approve or reject the report and after takin action update the status as well in report table
export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, 'user'))
    const postdata = await readBody(event);
    let Id;
    const update = await prisma.decision.findMany({
        where: {
            ReportId: postdata.ReportId,
            Role: 'Admin'
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
                    Role: "Admin",
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
                        Rejected: 'False'
                    }
                })
            }
            else if (postdata.Rejected == 'True') {
                const update = prisma.decision.update({
                    where: {
                        ReportId: postdata.ReportId
                    },
                    data: {
                        Approve: 'False',
                        Rejected: 'True'
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
                Admin: "Approved",
            },
        })
        const reqrechk = await prisma.requestrecheck.delete({
            where: {
                ReportId: postdata.ReportId
            }
        })
    }
    else if (postdata.Rejected == "True") {
        const reportUpdate = await prisma.report.update({
            where: {
                Id: postdata.ReportId,

            },

            data: {
                Admin: "Rejected",
            },

        })
        const reqrechk = await prisma.requestrecheck.update({
            where: {
                ReportId: postdata.ReportId
            },
            data: {
                VerifierCheck: "False",
                AdminCheck: "False",
                AdminId: cookie.Id,
                AdminName: cookie.Username
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
