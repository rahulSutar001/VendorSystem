import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, "user")||"");
    const getReports = await prisma.requestrecheck.findMany({
        where: {
            AuthCheck: "True",
            VerifierCheck:"False",
            VerifierId: cookie.Id
        }
    })
    const id = getReports.map((reports)=>reports.ReportId)
    const reports = await prisma.report.findMany({
        where: {
            Id: {
                in: id
            }
        }
    }).then((sortReports)=>{
        return sortReports
    }).catch(async (err)=>{
        throw await err
    })
   
    
    return reports
})