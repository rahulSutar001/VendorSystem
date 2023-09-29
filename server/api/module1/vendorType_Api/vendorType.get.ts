import { PrismaClient } from "@prisma/client";
import { define } from "superstruct";
const prisma= new PrismaClient();

export default defineEventHandler(async()=>{
    try{
        const vendorType =await prisma.vendorType.findMany();
        return vendorType;
    }catch(error){
    return error;
    }
});