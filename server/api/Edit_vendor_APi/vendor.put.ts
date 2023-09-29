import { PrismaClient } from '@prisma/client'       
const prisma = new PrismaClient()

export default defineEventHandler(async(event)=>{
    const postdata = await readBody(event)

try{
    
    const vendor = await prisma.vendor.update({
        where: {
                Id:postdata.Id,
            },
            data: { 
                Email: postdata.email,
                Mobileno:postdata.Mobileno,
                Username:postdata.Username,
                Password:postdata.Password,
                User :postdata.User,
                Admin:postdata.Admin,
                Authoriser:postdata.Authoriser,
                Verifier:postdata.Verifier,
            },
     }); return vendor;
        }catch(error){
            return error;
        }
    })