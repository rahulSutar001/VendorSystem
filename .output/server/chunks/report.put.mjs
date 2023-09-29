import { defineEventHandler, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const report_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const report = await db.report.update({
    where: {
      Id: postdata.Id
    },
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.VendorGSTnumber,
      Paymenttype: postdata.Paymenttype,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDS,
      Total: postdata.Total,
      AdvancePayment: postdata.AdvancePayment,
      PaymentAmount: postdata.PaymentAmount,
      Location: postdata.Location,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation
    }
  }).then(async (report2) => {
    return {
      statusCode: 200,
      statusMessage: "Report Updated Successfully!"
    };
  }).catch(async (err) => {
    throw await err;
  });
  return report;
});

export { report_put as default };
//# sourceMappingURL=report.put.mjs.map
