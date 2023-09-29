import { PrismaClient } from '@prisma/client'       
const prisma = new PrismaClient()
export default defineEventHandler(async(event) => {
    const postdata = await readBody(event)
   
    try {
 
     const  vendor = await prisma.vendorCategory.create({
        data:{
            vendorType :postdata.Type,
            vendorCategory: postdata.Vendor,
        },
    })
     return vendor;
     }catch(error){
       return error;
     }
    })