// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { Prisma, PrismaClient } from '@prisma/client'
// import db from '~/lib/prisma';

// const prisma = new PrismaClient()

// const secretKey = 'abcd';


// const generateToken = (id: number) => {
//   //please provide proper env file 'secreat token' instead 'ancdefg'
//   return jwt.sign({ userId: id }, secretKey, {
//     expiresIn: '10h',
//   })
// }



// export default defineEventHandler(async (event) => {



//   assertMethod(event, 'POST')
//   const postData = await readBody(event)

//   const { Username, Password } = postData
//   console.log("data here--->");
//   console.log(postData);

//   try {

//     if (postData.create === "User") {


//       let user = await db.vendor.findUnique({
//         where: {

//           Username: Username,

//         },
//       })

//       console.log("The user here ----> :" + user)

//       if (!user) {
//         return { message: 'Username does not exists.' };
//       }

//       const isPasswordValid = bcrypt.compare(Password, user.Password)

//       if (!isPasswordValid) {
//         return { message: 'pasword mismatch' };
//       }

//       if (user && isPasswordValid != null) {
//         let use = user.User
//         let admin = user.Admin
//         let Auth = user.Authoriser
//         let Verifier = user.Verifier
//         let users;
//         if (use === "True")
//           users = "/UserDashboard";
//         if (admin === "True")
//           users = "/Admin_dashboard";
//         if (Auth === "True")
//           users = "/Authoriser_dashboard";
//         if (Verifier === "True")
//           users = "/Verifier_dashboard";
//         console.log("user id here--->" + user.Id)
//         const token = generateToken(user.Id)
//         console.log("token id here--->" + token)
//         setCookie(event, 'user', JSON.stringify(user))
//         setCookie(event, 'token', token)
//         return { users, token };

//       }




//     } else if (postData.create == "superadmin") {

//       const user = await prisma.superadmin.findUnique({
//         where: {

//           Username: postData.Username

//         }
//       });

//       console.log(user)

//       if (!user) {
//         return { message: 'Username does not exists.' };
//       }

//       const isPasswordValid = await bcrypt.compare(postData.Password, user.Password);

//       if (!isPasswordValid) {
//         return { message: 'pasword mismatch.' };
//       }

//       if (user && isPasswordValid) {

//         console.log("user id here--->" + user.Id)
//         const token = generateToken(user.Id)
//         console.log("token id here--->" + token)
//         setCookie(event, 'token', token)
//         return { user, token };

//       }

//     }


//   } catch (error) {
//     console.error(error)
//     return { error };
//   }




// })
