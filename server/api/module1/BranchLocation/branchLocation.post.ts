import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {


    let value;
    const postdata = await readBody(event)
   

    const branchLocation = await prisma.branchlocation.create({
        data: {

            Branch: postdata.Branch,
            Location: postdata.location,
           
        },
    }).then((res) => {
        value = "New branch created successfully!"
    }).catch((err) => {
        console.log(err);
        value = "Branch already exists"
    })
    return value;
})