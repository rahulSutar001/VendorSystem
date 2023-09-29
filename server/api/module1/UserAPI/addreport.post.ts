import db from '~/lib/prisma'
import { assert, object, string, size, refine, integer, date } from 'superstruct'
import isEmail from 'isemail'




export default defineEventHandler(async (event) => {
    assertMethod(event, 'POST');

    const postdata = await readBody(event)
    // console.log(event.context)
    let data = event.node

    

    // const {Ven} = postdata
        const user = await db.report.create({
            data: {   
                           
                Vendorname  : postdata.Vendorname,       
                VendorGSTnumber:postdata.GSTnumber, 
                Paymenttype:postdata.Paymenttype,      
                Particular:postdata.Particular,       
                Basicamount:postdata.Basicamount,      
                GSTamount:postdata.GSTamount,     
                TDS:postdata.TDSamount,              
                Total:postdata.Totalamount,            
                AdvancePayment:postdata.Advanceamount,   
                PaymentAmount:postdata.Paymentamount,    
                Location:postdata.Location,         
                GSTstatus:postdata.GSTstatus,        
                BranchName:postdata.BranchName,
                BranchLocation:postdata.BranchLocation, 
                VendorModelId: 1
            },
        }).then( async (user) => {
            
            const userId = user.Id
            const BillNumber = await db.billNumber.create({
                data: {
                    ReportId : userId,
                  
                },
              });
              return await "status 200";
        }).catch(async (err) => {
              console.log(err);
              return await err
        })

        return await user
            




});
