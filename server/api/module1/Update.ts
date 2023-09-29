import db from '~/lib/prisma'


export default defineEventHandler(async (event) => {
    assertMethod(event, 'PUT');

    const postData = await readBody(event)

    try {
        // assert(postData, userVM)


        const user = await db.report.update({
            data: {
                where: {
                    id: postData.id,
                  },
                  data: {
                    Verifier: postData.verifier,
                  },
            },
        })

        return await user;
    } catch (error) {
        return error;
    }})
