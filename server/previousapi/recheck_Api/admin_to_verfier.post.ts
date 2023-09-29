import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const postdata = await readBody(event);

  try {
    const decision = await prisma.decision.findMany({
      where: {
        AND: [
          { VendorModelId: postdata.VendorModelId },
          { Role: postdata.Role },
        ],
      },
    })

    const adminrejected =await prisma.decision.findMany({
        where:{
            AND:[
                { ReportId:postdata.ReportId},
                {Rejected:true},
                {Role:"Admin"},
            ]
        }
    })

    
    return {decision,adminrejected};
  } catch (error) {
    return error;
  }
});

