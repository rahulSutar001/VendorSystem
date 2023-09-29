
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, 'user'))

    // const postdata = await readBody(event);
    try {
      
        const statusApprovedreport = await prisma.report.findMany({
            where: {
                VendorModelId: cookie.Id,
                status:"Rejected",
            },
        });

       
        
        
        return statusApprovedreport;
    } catch (error) {
        return error;
    }
});
