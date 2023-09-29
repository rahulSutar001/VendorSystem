import { defineEventHandler, assertMethod } from 'h3';
import { d as db } from './prisma.mjs';
import '@prisma/client';

const GetNewPerson = defineEventHandler(async (event) => {
  assertMethod(event, "GET");
  return await db.admissionRahul.findMany({});
});

export { GetNewPerson as default };
//# sourceMappingURL=GetNewPerson.mjs.map
