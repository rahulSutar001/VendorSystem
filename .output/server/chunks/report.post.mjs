import { defineEventHandler, readBody, getCookie } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const report_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const report = await db.report.create({
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.GSTnumber,
      Paymenttype: postdata.Paymenttype,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDSamount,
      Total: postdata.Totalamount,
      AdvancePayment: postdata.Advanceamount,
      PaymentAmount: postdata.Paymentamount,
      Location: postdata.Location,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation,
      VendorModelId: cookie.Id
    }
  }).then(async (report2) => {
    await db.billNumber.create({
      data: {
        ReportId: report2.Id
      }
    });
    await db.requestrecheck.create({
      data: {
        ReportId: report2.Id,
        UserId: cookie.Id,
        UserName: cookie.Username,
        UserCheck: "True"
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Created Successfully!"
    };
  }).catch(async (err) => {
    throw await err;
  });
  return report;
});

export { report_post as default };
//# sourceMappingURL=report.post.mjs.map
