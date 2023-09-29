
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const secretKey = 'abcd';


const generateToken = (id: number ) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id }, secretKey, {
        expiresIn: '10h',
    })
}


export default defineEventHandler(async (event) => {
    // assertMethod(event, 'POST');
    const postData = await readBody(event)
    
    
        assertMethod(event, 'POST');
        // console.log("this is postdata -------->");
        
        // console.log(postData);
        

        // const postData = await readBody(event);

        try {
            // assert(postData, userVM)
            // const { Username, Password, Mobileno, EmailId, Role } = postData
            
         
        // ---------------------The user and vendor creation section starts here -------------

        if(postData.create == "User"){

             // Check if the username already exists in the database
             const existingUser = await prisma.vendor.findUnique({
                where: {
                    Username: postData.Username,
                },
            })

            if (existingUser) {
                // throw new Error('Username already exists.')
                return { message: 'Username already exists.' };
            }

            const hashedPassword = await bcrypt.hash(postData.Password, 10);

            const user = await prisma.vendor.create({
                data: {
                     
                    Vendorname:postData.Vendorname,                                  
                    Username:postData.Username,                    
                    Password:hashedPassword,                      
                    BranchLocation: postData.Branchlocation,
                    Branchname : postData.Branchname,
                    vendorType: postData.vendorType,
                    vendorCategory: postData.vendorCategory,
                    categorySubtype:postData.categorySubtype,
                    GSTnumber: postData.GSTnumber,
                    PanNumber: postData.PanNumber,
                    User: postData.User,
                    Admin: postData.Admin,
                    Authoriser: postData.Authoriser,
                    Verifier: postData.Verifier,
                    BankName: postData.Bankname,
                    BankAccountNumber: postData.BankAccountNumber,
                    BankIFCcode: postData.BankIFCcode,
    
                },

            })

        //    console.log(user);
           
            if (!user) {
                return { message: 'User creating failed.' };
            }
            if(user)

            return { user  };

              // ------------------------The user and vendor creating code ends here -----------------

        } else {

            // ------------------------The super admin creating code starts here -----------------

             // Check if the username already exists in the database
             const existingUser = await prisma.superadmin.findUnique({
                where: {
                    Username: postData.Username,
                },
            })

            if (existingUser) {
                // throw new Error('Username already exists.')
                return { message: 'Username already exists.' };
            }
            
            const hashedPassword = await bcrypt.hash(postData.Password, 10);

            const user = await prisma.superadmin.create({
                data: {
                    Username: postData.Username,
                    Mobile: postData.Mobileno,
                    Password: hashedPassword,
                    EmailId: postData.EmailId
                    
                },
            })


            if (!user) {
                return { message: 'User creating failed.' };
            }

            const token = generateToken(user.Id)
            setCookie(event, 'token', token)
            return { result: { user, token } };

            // ------------------------The super admin creating code ends here -----------------

        }


        
        } catch (error) {
            return error;
        }
});


// import { IncomingMessage, ServerResponse } from 'http'
// import { NuxtHTTPInstance } from '@nuxt/http'





// const middleware: Middleware = async (context) => {
//   const { app, req, res } = context

//   try {
//     const http = app.$http as NuxtHTTPInstance<IncomingMessage, ServerResponse>

//     const { action, username, password, mobileno } = http.parsedBody

//     if (action === 'signup') {
//       const hashedPassword = await bcrypt.hash(password, 10)

//       // Check if the username already exists in the database
//       const existingUser = await prisma.vendor.findFirst({
//         where: {
//           Username: username,
//         },
//       })

//       if (existingUser) {
//         throw new Error('Username already exists.')
//       }

//       const user = await prisma.vendor.create({
//         data: {
//           Username: username,
//           Mobileno: mobileno,
//           Password: hashedPassword,
//         },
//       })

//       if (!user) {
//         throw new Error('User creation failed.')
//       }

//       const token = generateToken(user.id)

//       // Save the userId in the session
//       await http.$session.set('userId', user.id)
//       await http.$session.save()

//       res.json({ user, token })
//     } else if (action === 'signin') {
//       const user = await prisma.vendor.findUnique({
//         where: {
//           Username: username,
//         },
//       })

//       if (!user) {
//         return res.status(404).json({ error: 'The user does not exist' })
//       }

//       const isPasswordValid = await bcrypt.compare(password, user.Password)

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: 'Invalid password' })
//       }

//       const token = generateToken(user.id)

//       res.json({ user, token })
//     } else {
//       res.status(400).json({ error: 'Invalid action' })
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

// export default middleware


// -------------------
            // const token = generateToken(user.Id)
            // console.log("token id here--->"+ token )
            // setCookie(event, 'token', token)
            // return { result: { user, token } };

            
          
            // const token = generateToken(user.Id)
            // setCookie(event, 'token', token)