import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async() => {
  try{
    const vendor =await prisma.vendor.findMany({
        where:{
            Admin:"True"
        }
    });
    return vendor;
  }catch(error){
    return error;
  }
    
  });