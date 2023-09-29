import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorcategoy_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const VendorCategory = await prisma.VendorCategory.update({
      where: {
        id: postdata.id
      },
      data: {
        Anvendor: postdata.Anvendor,
        MBTvendor: postdata.MBTvendor
      }
    });
    return VendorCategory;
  } catch (error) {
    return error;
  }
});

export { vendorcategoy_put as default };
//# sourceMappingURL=vendorcategoy.put.mjs.map
