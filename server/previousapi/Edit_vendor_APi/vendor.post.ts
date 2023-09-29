import { PrismaClient } from '@prisma/client'       
import vendorGet from './vendor.get'
const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
   const postdata = await readBody(event)
   let vendor =null
   try {

    const  vendor = await prisma.vendor.create({
    data:{      
        Vendorname:postdata.Vendorname,              
        Email:postdata.Email,                          
        Mobileno:postdata.Mobileno,                    
        Username:postdata.Username,                    
        Password:postdata.Password,                  
        GSTnumber:postdata.GSTnumber,                
        PanNumber:postdata.PanNumber,                
        BankName:postdata.BankName,                  
        BankAccountNumber:postdata.BankAccountNumber,
        BankIFCcode:postdata.BankIFCcode,                         
        BranchLocationId:postdata.BranchLocationId,      
        User:postdata.User,
        Admin:postdata.Admin,
        Authoriser:postdata.Authoriser,       
        Verifier:postdata.Verifier,
        SuperadminId:postdata.SuperadminId,         
    },
   })
    return vendor;
    }catch(error){
      return""+error
    }
   })
   
  