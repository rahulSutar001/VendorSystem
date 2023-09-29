import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const vendorcategoy_delete = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    let VendorCategory = null;
    VendorCategory = await prisma.VendorCategory.delete({
      where: {
        Id: body.Id
      }
    });
    return VendorCategory;
  } catch (error) {
    return error;
  }
});

export { vendorcategoy_delete as default };
//# sourceMappingURL=vendorcategoy.delete.mjs.map
