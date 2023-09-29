import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client'
import db from '~/lib/prisma';

const prisma = new PrismaClient()

const secretKey = 'abcd';


const generateToken = (id: number) => {
    //please provide proper env file 'secreat token' instead 'ancdefg'
    return jwt.sign({ userId: id }, secretKey, {
        expiresIn: '10h',
    })
}



export default defineEventHandler(async (event) => {



    assertMethod(event, 'POST')
    const postData = await readBody(event)
    var response = {};
    // const { Username, Password } = postData


    try {

        if (postData.Username == "superadmin") {

            const user = await prisma.superadmin.findUnique({
                where: {

                    Username: postData.Username

                }
            });

         

            if (!user) {
                return { message: 'Username does not exists.' };
            }

            const isPasswordValid = await bcrypt.compare(postData.Password, user.Password);

            if (!isPasswordValid) {
                return { message: 'pasword mismatch.' };
            }

            if (user && isPasswordValid) {

               
                const token = generateToken(user.Id)
             
                setCookie(event, 'token', token)
                return { user, token };

            }

        } else {


            let user = await db.vendor.findUnique({
                where: {

                    Username: postData.Username,

                },
            }).then(async (res) => {

                const isPasswordValid = await bcrypt.compare(postData.Password, res.Password).then(async (verify) => {
                 
                    if (verify) {
                        let use = res.User
                        let admin = res.Admin
                        let Auth = res.Authoriser
                        let Verifier = res.Verifier
                        let users;
                        if (use === "True")
                            users = "/User_DPage";
                        if (admin === "True")
                            users = "/Admin/AdminDPage";
                        if (Auth === "True")
                            users = "/AuthoriserDPage";
                        if (Verifier === "True")
                            users = "/VerifierDPage";
                       
                        const token = await generateToken(res.Id)
                     
                        await setCookie(event, 'user', JSON.stringify(res))
                        await setCookie(event, 'token', token)
                        response = { users, token };
                    }
                    else {
                      
                        throw new Error('pasword mismatch');
                    }
                })
               
                return response;

            }).catch((err) => {

                if (err == "Error: pasword mismatch")
                    response = { message: 'Pasword mismatch' }
                else
                    response = { message: 'Username does not exists.' };


            })

            return response;



        }


    } catch (error) {
      
        return { error };
    }




})
