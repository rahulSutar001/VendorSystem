import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
export default defineEventHandler(async(event)=>{
    try{
        const postdata=await readBody(event);
        let vendorType=null;

        vendorType = await prisma.vendorType.delete({
            where:{
                Id:postdata.Id,
            },
        });
        return vendorType;
    }catch(error){
        return error;
    }
});