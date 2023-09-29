import { PrismaClient } from '@prisma/client'       
// import vendorGet from './vendor.get'
const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
   const postdata = await readBody(event)
  
   try {

    const  vendor = await prisma.vendor.create({
    data:{      
        Vendorname:postdata.Vendorname,              
        Email:postdata.Email,                          
        Mobileno:postdata.Mobileno,                    
        Username:postdata.Username,                    
        Password:postdata.Password,                  
        SuperadminId:1,     
        
        Branchlocation: postdata.Branchlocation,
        Branchname: postdata.Branchname,

        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier,

        Bankname: postdata.Bankname,
        BankAccountNumber: postdata.BankAccountNumber,
        BankIFCcode: postdata.BankIFCcode,


    },
   })
    return vendor;
    }catch(error){
      return""+error
    }
   })
   
  