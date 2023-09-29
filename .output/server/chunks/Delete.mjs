import { defineEventHandler, assertMethod, readBody } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const Delete = defineEventHandler(async (event) => {
  assertMethod(event, "DELETE");
  const postData = await readBody(event);
  try {
    const user = await db.admissionRahul.delete({
      data: {
        id: parseInt(postData.id)
      }
    });
    return await user;
  } catch (error) {
    return "" + error;
  }
});

export { Delete as default };
//# sourceMappingURL=Delete.mjs.map
