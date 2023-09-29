import db from '~/lib/prisma'

export default defineEventHandler( async (event) =>{
    assertMethod (event, 'GET');
    return await db.admissionRahul.findMany({

    });
})