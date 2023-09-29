import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

export default defineEventHandler(async(event)=>{
    const postdata=await readBody(event)
    try{
        const vendorType =await prisma.vendorType.update({
            where:{
                Id:postdata.Id,
            },
            data:{
                Types:postdata.Types,

            },
        
        });
        return vendorType;

    }catch(error){
        return error;
    }
})