import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const branchLocation_post = defineEventHandler(async (event) => {
  let value;
  const postdata = await readBody(event);
  await prisma.branchlocation.create({
    data: {
      Branch: postdata.Branch,
      Location: postdata.location
    }
  }).then((res) => {
    value = "New branch created successfully!";
  }).catch((err) => {
    console.log(err);
    value = "Branch already exists";
  });
  return value;
});

export { branchLocation_post as default };
//# sourceMappingURL=branchLocation.post.mjs.map
