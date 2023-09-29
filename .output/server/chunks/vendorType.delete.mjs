import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorType_delete = defineEventHandler(async (event) => {
  try {
    const postdata = await readBody(event);
    let vendorType = null;
    vendorType = await prisma.vendorType.delete({
      where: {
        Id: postdata.Id
      }
    });
    return vendorType;
  } catch (error) {
    return error;
  }
});

export { vendorType_delete as default };
//# sourceMappingURL=vendorType.delete.mjs.map
