// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export default defineEventHandler(async(event)=>{
//     try{
//     const postdata =await readBody(event)
   
// console.log("Id here");
// console.log(postdata);


//    const vendor = await prisma.vendor.delete({
//         where:{
//             Id:postdata.id,
//         },

//     });
//       return vendor;
//     } catch(error){
//         return error;
//     }

// });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async(event)=>{
    try{
        const postData=await readBody(event);
        
        
        
         const vendordelete = await prisma.vendor.delete({
            where:{
                Id:postData.id,
            },
        });
        return vendordelete;
    } catch (error){
        return error;
      
        
    }
});