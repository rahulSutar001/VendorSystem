import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async(event)=>{
    try{
        const postData=await readBody(event);
        let branchLocation=null;
        branchLocation=await prisma.branchlocation.delete({
            where:{
                id:postData.id,
            },
        });
        return branchLocation;
    } catch (error){
        return error;
    }
});
