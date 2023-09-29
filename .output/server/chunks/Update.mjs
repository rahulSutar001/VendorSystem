import { defineEventHandler, assertMethod, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const Update = defineEventHandler(async (event) => {
  assertMethod(event, "PUT");
  const postData = await readBody(event);
  try {
    const user = await db.report.update({
      data: {
        where: {
          id: postData.id
        },
        data: {
          Verifier: postData.verifier
        }
      }
    });
    return await user;
  } catch (error) {
    return error;
  }
});

export { Update as default };
//# sourceMappingURL=Update.mjs.map
