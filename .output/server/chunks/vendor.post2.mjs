import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendor_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor = await prisma.vendor.create({
      data: {
        Vendorname: postdata.Vendorname,
        Email: postdata.Email,
        Mobileno: postdata.Mobileno,
        Username: postdata.Username,
        Password: postdata.Password,
        SuperadminId: 1,
        Branchlocation: postdata.Branchlocation,
        Branchname: postdata.Branchname,
        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier,
        Bankname: postdata.Bankname,
        BankAccountNumber: postdata.BankAccountNumber,
        BankIFCcode: postdata.BankIFCcode
      }
    });
    return vendor;
  } catch (error) {
    return "" + error;
  }
});

export { vendor_post as default };
//# sourceMappingURL=vendor.post2.mjs.map
