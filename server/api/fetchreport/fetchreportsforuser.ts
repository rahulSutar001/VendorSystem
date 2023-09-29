
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, 'user'))

    // const postdata = await readBody(event);
    try {
        const decision = await prisma.decision.findMany({
            where: {
                VendorModelId: cookie.Id,
              Role:"Authoriser",
              Rejected:"True",
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
