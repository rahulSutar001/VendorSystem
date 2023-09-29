import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const branchLocation_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const branchLocation = await prisma.branchlocation.update({
      where: {
        id: postdata.id
      },
      data: {
        branch: postdata.branch,
        location: postdata.location
      }
    });
    return branchLocation;
  } catch (error) {
    return error;
  }
});

export { branchLocation_put as default };
//# sourceMappingURL=branchLocation.put.mjs.map
