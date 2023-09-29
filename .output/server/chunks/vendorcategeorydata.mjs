import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorcategeorydata = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor = await prisma.vendorCategory.create({
      data: {
        vendorType: postdata.Type,
        vendorCategory: postdata.Vendor
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

export { vendorcategeorydata as default };
//# sourceMappingURL=vendorcategeorydata.mjs.map
