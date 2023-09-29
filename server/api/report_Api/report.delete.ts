import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async(event)=>{
    try{
        const postData=await readBody(event);
        let report=null;
        report=await prisma.report.delete({
            where:{
                Id:postData.Id,
            },
        });
        return report;
    } catch (error){
        return error;
    }
});