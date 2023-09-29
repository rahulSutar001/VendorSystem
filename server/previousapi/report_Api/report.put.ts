import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

export default defineEventHandler(async(event)=>{
    const postdata=await readBody(event)
    try{

        const report =await prisma.report.update({
            where:{
                Id:postdata.Id,
            },
            data:{
                Vendorname:postdata.Vendorname,       
                VendorGSTnumber:postdata.VendorGSTnumber, 
                Paymenttype:postdata.Paymenttype,      
                    
                Basicamount:postdata.Basicamount,      
                GSTamount:postdata.GSTamount,       
                TDS:postdata.TDS,              
                Total:postdata.Total,            
                AdvancePayment:postdata.AdvancePayment,   
                PaymentAmount:postdata.PaymentAmount,    
                Location:postdata.Location,         
    
                BranchName:postdata.BranchName,
                BranchLocation:postdata.BranchLocation, 
            },
        });
        return report;
    }catch(error){
        return""+error
    }
}) 