
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Fetxh Report  where verfier Has  rejected The report 
export default defineEventHandler(async (event) => {
    const postdata  = await readBody(event);
  try {
    const decision = await prisma.decision.findMany({
        where:{
            AND:[
                {VendorModelId:postdata.AuthoriserId},
            ],
        },
    })
    
    const findreport=await prisma.decision.findMany({
        where:{
            AND:[
                {ReportId:postdata.ReportId},
                {Role:"Verifier"},
                {Rejected:true}
            ]
            
        }
    })

    return {decision,findreport};
  } catch (error) {
    return error;
  }
});
