import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const postdata = await readBody(event);
    const cookie = JSON.parse(getCookie(event, "user"));
    

    let value;
    if (postdata.recheck == "Approved") {
        const reqrechk = await prisma.requestrecheck.findMany({
            where: {
                UserCheck: "True",
                AuthCheck: "True",
                UserId: cookie.Id
            }
        }).then((res) => {
            const id = res.map((res) => res.ReportId)
            const reports = prisma.report.findMany({
                where: {
                    Id: {
                        in: id
                    }
                }
            })
            value = reports;

        })
    } else if (postdata.recheck == "Rejected") {
        const reqrechk = await prisma.requestrecheck.findMany({
            where: {
                UserCheck: "False",
                AuthCheck: "False",
                UserId: cookie.Id
            }
        }).then((res) => {
            console.log(res);
            
            const id = res.map((res) => res.ReportId)
            const reports = prisma.report.findMany({
                where: {
                    Id: {
                        in: id
                    }
                }
            })
            value = reports;
        })
    }

    return value;
})