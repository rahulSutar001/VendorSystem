import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendor_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor2 = await prisma.vendor.create({
      data: {
        Vendorname: postdata.Vendorname,
        Email: postdata.Email,
        Mobileno: postdata.Mobileno,
        Username: postdata.Username,
        Password: postdata.Password,
        GSTnumber: postdata.GSTnumber,
        PanNumber: postdata.PanNumber,
        BankName: postdata.BankName,
        BankAccountNumber: postdata.BankAccountNumber,
        BankIFCcode: postdata.BankIFCcode,
        BranchLocationId: postdata.BranchLocationId,
        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier,
        SuperadminId: postdata.SuperadminId
      }
    });
    return vendor2;
  } catch (error) {
    return error;
  }
});

export { vendor_post as default };
//# sourceMappingURL=vendor.post.mjs.map
