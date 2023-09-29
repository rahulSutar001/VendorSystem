import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, "user"));

    const reqrechk = await prisma.requestrecheck.findMany({
        where: {
            AuthCheck: "True",
            VerifierCheck:"False",
            VerifierId: cookie.Id
        }
    })
    const id = reqrechk.map((reqrechk)=>reqrechk.ReportId)

    const reports = prisma.report.findMany({
        where: {
            Id: {
                in: id
            }
        }
    })

    return reports
})