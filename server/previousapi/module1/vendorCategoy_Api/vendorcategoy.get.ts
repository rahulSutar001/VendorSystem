import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async() => {
  try{
    const vendorcategory =await prisma.vendorCategory.findMany();
    return vendorcategory;
  }catch(error){
    return error;
  }
     
  });
  