import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const reportcreated_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const report2 = await prisma.report.create({
      data: {
        Vendorname: postdata.Vendorname,
        VendorGSTnumber: postdata.VendorGSTnumber,
        Paymenttype: postdata.Paymenttype,
        Particular: postdata.Particular,
        Basicamount: postdata.Basicamount,
        GSTamount: postdata.GSTamount,
        TDS: postdata.TDS,
        Total: postdata.Total,
        AdvancePayment: postdata.AdvancePayment,
        PaymentAmount: postdata.PaymentAmount,
        Location: postdata.Location,
        Verifier: postdata.Verifier,
        Authoriser: postdata.Authoriser,
        Admin: postdata.Admin,
        GSTstatus: postdata.GSTstatus,
        status: postdata.status,
        BranchName: postdata.BranchName,
        BranchLocation: postdata.BranchLocation
      }
    });
    return report2;
  } catch (error) {
    return "" + error;
  }
});

export { reportcreated_post as default };
//# sourceMappingURL=reportcreated.post.mjs.map
