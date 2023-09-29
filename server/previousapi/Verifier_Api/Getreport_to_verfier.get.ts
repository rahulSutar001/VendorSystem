
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, 'user'))
  
  let postdata = event.node.req
 
  try {
    const decision = await prisma.decision.findMany({
      where: {
        Role: "Authoriser",
        Approve: "True",

      },
    });
    const Id = decision.map((decision) => decision.ReportId);
    const findreport = await prisma.report.findMany({
      where: {
        Id: {
          in: Id,
        },
        Authoriser: "Approved",
        Verifier: "Pending",
        BranchLocation:cookie.BranchLocation
        
      },
 
    });
    return findreport;
  } catch (error) {
    return error;
  }
});