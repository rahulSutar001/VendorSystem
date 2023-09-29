



import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const reports = await prisma.report.findMany({
      where: {
        Authoriser: "Approved",
        Verifier: "Approved",
        Admin: "Approved",
      },
    });

    const reportIds = reports.map((report) => report.Id);

    for (const reportId of reportIds) {
      await prisma.report.updateMany({
        where: {
          Id: reportId,
        },
        data: {
          status: "Approved",
        },
      });
    }

    return "Reports updated successfully";
  } catch (error) {
    return  error;
  }
});






























// // import { PrismaClient } from '@prisma/client';

// // const prisma = new PrismaClient();

// // export default defineEventHandler(async (event) => {
// //   const postdata = await readBody(event);

// //   try {
// //     const reports = await prisma.report.findMany({
// //       where: {
// //         Authoriser: "Approved",
// //         Verifier: "Approved",
// //         Admin: "Approved",
// //       },
// //       select: {
// //         Id: true,
// //       },
// //     });

// //     const reportIds = reports.map((report) => report.Id);

// //     if (reportIds.length === 3) {
// //       const updatedReports = await prisma.report.updateMany({
// //         where: {
// //           Id: { in: reportIds },
// //         },
// //         data: {
// //           status: "Approved",
// //         },
// //       });

// //       return updatedReports;
// //     }
// //   } catch (error) {
// //     return "" + error;
// //   }
// // });

























// // import { PrismaClient} from '@prisma/client';
// // const prisma=new PrismaClient()

// // export default defineEventHandler(async (event) => {
// //   // https://nuxt.com/docs/guide/directory-structure/server#handling-requests-with-body
// //   const postdata  = await readBody(event);
// //   let decision=null
// // try{

// //     const decision = await prisma.report.findMany({
// //         where:{
// //             Authoriser:"Approved",
// //             Verifier:"Approved",
// //             Admin:"Approved",


// //         }
// //     })
// //       // return decision;
// //       const reportno=postdata.ReportId
// //       if(decision===3){
// //         const report = await prisma.report.update({
// //           where:{
// //             Id:reportno
// //           },
// //          data:{
// //           status:"Approved",
// //          },
          
// //         })
// //         return report; 
// //       }
      
// // }   catch(error){
// //   return""+error
// // }
// //   })
