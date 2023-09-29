import { defineEventHandler, readBody, assertMethod, setCookie } from 'h3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const secretKey = "abcd";
const generateToken = (id) => {
  return jwt.sign({ userId: id }, secretKey, {
    expiresIn: "10h"
  });
};
const signup_post = defineEventHandler(async (event) => {
  const postData = await readBody(event);
  assertMethod(event, "POST");
  try {
    if (postData.create == "User") {
      const existingUser = await prisma.vendor.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return { message: "Username already exists." };
      }
      const hashedPassword = await bcrypt.hash(postData.Password, 10);
      const user = await prisma.vendor.create({
        data: {
          Vendorname: postData.Vendorname,
          Username: postData.Username,
          Password: hashedPassword,
          BranchLocation: postData.Branchlocation,
          Branchname: postData.Branchname,
          vendorType: postData.vendorType,
          vendorCategory: postData.vendorCategory,
          categorySubtype: postData.categorySubtype,
          GSTnumber: postData.GSTnumber,
          PanNumber: postData.PanNumber,
          User: postData.User,
          Admin: postData.Admin,
          Authoriser: postData.Authoriser,
          Verifier: postData.Verifier,
          BankName: postData.Bankname,
          BankAccountNumber: postData.BankAccountNumber,
          BankIFCcode: postData.BankIFCcode
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      if (user)
        return { user };
    } else {
      const existingUser = await prisma.superadmin.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return { message: "Username already exists." };
      }
      const hashedPassword = await bcrypt.hash(postData.Password, 10);
      const user = await prisma.superadmin.create({
        data: {
          Username: postData.Username,
          Mobile: postData.Mobileno,
          Password: hashedPassword,
          EmailId: postData.EmailId
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      const token = generateToken(user.Id);
      setCookie(event, "token", token);
      return { result: { user, token } };
    }
  } catch (error) {
    return error;
  }
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
