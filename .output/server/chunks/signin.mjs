import { defineEventHandler, readBody, setCookie, createError } from 'h3';
import { d as db } from './prisma.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import '@prisma/client';

const secretKey = "abcd";
const generateToken = (id) => {
  return jwt.sign({ userId: id }, secretKey, {
    expiresIn: "10h"
  });
};
const signin = defineEventHandler(async (event) => {
  const reqBody = await readBody(event);
  const SignIn = await db.vendor.findUnique({
    where: {
      Username: reqBody.Username
    }
  }).then(async (user) => {
    if (user) {
      const isPasswordValid = await bcrypt.compare(reqBody.Password, user.Password);
      if (isPasswordValid) {
        let use = user.User;
        let admin = user.Admin;
        let Auth = user.Authoriser;
        let Verifier = user.Verifier;
        let users;
        if (use === "True")
          users = "/User_DPage";
        if (admin === "True")
          users = "/Admin/AdminDPage";
        if (Auth === "True")
          users = "/AuthoriserDPage";
        if (Verifier === "True")
          users = "/VerifierDPage";
        const token = generateToken(user.Id);
        setCookie(event, "user", JSON.stringify(user));
        setCookie(event, "token", token);
        return {
          "statusCode": 200,
          "statusMessage": "OK",
          users,
          token
        };
      } else {
        throw createError({ statusCode: 500, statusMessage: "Invalid Password" });
      }
    } else {
      throw {
        "statusCode": 500,
        "statusMessage": "Username not found!",
        "message": "Username not found!"
      };
    }
  }).catch(async (err) => {
    console.log(err);
    throw err;
  });
  return SignIn;
});

export { signin as default };
//# sourceMappingURL=signin.mjs.map
