import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

export default defineEventHandler(async(event)=>{
    const postdata =await readBody(event)
    let vendortype=null
    try{
     const vendorType = await prisma.vendorType.create({
        data:{
                Types:postdata.Type,
                SuperadminId: 1
        },
    })
    return await vendorType;
    } catch (error){
        return error
    }

    })