import { defineEventHandler, assertMethod, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const addreport_post = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const postdata = await readBody(event);
  event.node;
  const user = await db.report.create({
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
      GSTstatus: postdata.GSTstatus,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation,
      VendorModelId: 1
    }
  }).then(async (user2) => {
    const userId = user2.Id;
    await db.billNumber.create({
      data: {
        ReportId: userId
      }
    });
    return await "status 200";
  }).catch(async (err) => {
    console.log(err);
    return await err;
  });
  return await user;
});

export { addreport_post as default };
//# sourceMappingURL=addreport.post.mjs.map
