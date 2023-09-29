import { PrismaClient } from '@prisma/client'       
const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
   const postdata = await readBody(event)

   
   try{

     if(postdata.Type == "A/V vendor"){

      const VendorCategory = await prisma.vendorCategory.create({
        data:{
             Avendor :postdata.Vendor,
             SuperadminId: 1,
             
    
        },
    
       }).then((res) => {
       
       }).catch((err) => {
           console.log(err);
           
       })

       


     }else if (postdata.Type == "MBT Vendor"){

      const VendorCategory = await prisma.vendorCategory.create({
        data:{
            //  Anvendor:postdata.Anvendor,    
             MBTvendor:postdata.Vendor,
             SuperadminId: 1
    
        },
    
       }).then((res) => {
       
       }).catch((err) => {
           console.log(err);
           
       })
       
     }
    
    
    }catch(error){
      return error;
    }
  })
  