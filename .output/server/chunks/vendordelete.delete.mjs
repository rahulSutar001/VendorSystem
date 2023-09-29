import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendordelete_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    const vendordelete = await prisma.vendor.delete({
      where: {
        Id: postData.id
      }
    });
    return vendordelete;
  } catch (error) {
    return error;
  }
});

export { vendordelete_delete as default };
//# sourceMappingURL=vendordelete.delete.mjs.map
