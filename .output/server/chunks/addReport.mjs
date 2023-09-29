import { defineEventHandler, readBody, getCookie } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const addReport = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const cookie = JSON.parse(getCookie(event, "user"));
  await db.report.create({
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.GSTnumber,
      Paymenttype: postdata.Paymenttype,
      Particular: postdata.Particular,
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
  }).then(async (user2) => {
    const userId = user2.Id;
    await db.billNumber.create({
      data: {
        ReportId: userId
      }
    });
    await db.requestrecheck.create({
      data: {
        ReportId: user2.Id,
        UserId: cookie.Id,
        UserName: cookie.Username,
        UserCheck: "True"
      }
    });
  }).catch(async (err) => {
    return await err;
  });
  return { message: "Report Created Successfully" };
});

export { addReport as default };
//# sourceMappingURL=addReport.mjs.map
