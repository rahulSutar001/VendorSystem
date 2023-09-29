import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, 'user')||"")
    try {
        const decision = await prisma.decision.findMany({
            where: {
                VendorModelId: cookie.Id,
               Approve:"True",
            },
            select: {
                ReportId: true,
            },
        })
        const Id = decision.map((decision) => decision.ReportId); 
        const AuthoriserApprovedreport = await prisma.report.findMany({
            where: {
                Id: {
                    in:Id,
                }
            },
        });

        return AuthoriserApprovedreport;
    } catch (error) {
        return error;
    }
});
