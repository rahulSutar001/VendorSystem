import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorType_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendorType = await prisma.vendorType.update({
      where: {
        Id: postdata.Id
      },
      data: {
        Types: postdata.Types
      }
    });
    return vendorType;
  } catch (error) {
    return error;
  }
});

export { vendorType_put as default };
//# sourceMappingURL=vendorType.put.mjs.map
