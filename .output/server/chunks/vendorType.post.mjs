import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorType_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendorType = await prisma.vendorType.create({
      data: {
        Types: postdata.Type,
        SuperadminId: 1
      }
    });
    return await vendorType;
  } catch (error) {
    return error;
  }
});

export { vendorType_post as default };
//# sourceMappingURL=vendorType.post.mjs.map
