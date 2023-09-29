import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const branchLocation_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    let branchLocation = null;
    branchLocation = await prisma.branchlocation.delete({
      where: {
        id: postData.id
      }
    });
    return branchLocation;
  } catch (error) {
    return error;
  }
});

export { branchLocation_delete as default };
//# sourceMappingURL=branchLocation.delete.mjs.map
