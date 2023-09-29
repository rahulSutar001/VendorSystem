import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

export default defineEventHandler(async(event)=>{
    const postdata=await readBody(event)
    let report=null

    try{
        const report =await prisma.report.create({
            data:{
                Vendorname:postdata.Vendorname,       
                VendorGSTnumber:postdata.VendorGSTnumber, 
                Paymenttype:postdata.Paymenttype,      
                Particular:postdata.Particular,       
                Basicamount:postdata.Basicamount,      
                GSTamount:postdata.GSTamount,       
                TDS:postdata.TDS,              
                Total:postdata.Total,            
                AdvancePayment:postdata.AdvancePayment,   
                PaymentAmount:postdata.PaymentAmount,    
                Location:postdata.Location,         
                Verifier:postdata.Verifier,         
                Authoriser:postdata.Authoriser,       
                Admin:postdata.Admin,            
                GSTstatus:postdata.GSTstatus,        
                status:postdata.status, 
                BranchName:postdata.BranchName,
                BranchLocation:postdata.BranchLocation,                    
            },
        })
         return report;
    }
    catch(error){
        return "" +error

    }
})   
    
