import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async(event) => {
  try{
  const body = await readBody(event)
  let VendorCategory=null
  VendorCategory = await prisma.VendorCategory.delete({
    where: {
    Id: body.Id,
    },
  });
     return VendorCategory;
    }catch(error){
      return error;
    }
  });