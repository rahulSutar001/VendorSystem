import db from '~/lib/prisma'

export default defineEventHandler(async (event) => {

    const postdata = await readBody(event)
    const cookie = JSON.parse(getCookie(event, "user"))
   



    // const {Ven} = postdata
    const user = await db.report.create({
        data: {

            Vendorname: postdata.Vendorname,
            VendorGSTnumber: postdata.GSTnumber,
            Paymenttype: postdata.Paymenttype,
            Particular: postdata.Particular,
            Basicamount: postdata.Basicamount,
            GSTamount: postdata.GSTamount,
            TDS: postdata.TDSamount,
            Total: postdata.Totalamount,
            AdvancePayment: postdata.Advanceamount,
            PaymentAmount: postdata.Paymentamount,
            Location: postdata.Location,
            BranchName: postdata.BranchName,
            BranchLocation: postdata.BranchLocation,
            VendorModelId: cookie.Id
        },
    }).then(async (user) => {
        const userId = user.Id
        const BillNumber = await db.billNumber.create({
            data: {
                ReportId: userId,

            },
        });
       

        const reqchck = await db.requestrecheck.create({
            data: {
                ReportId: user.Id,
                UserId: cookie.Id,
                UserName: cookie.Username,
                UserCheck: "True"

            }
        });
        

    }).catch(async (err) => {
        return await err
    })
   
    return { message: "Report Created Successfully" }





});