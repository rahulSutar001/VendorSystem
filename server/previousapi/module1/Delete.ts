import db from '~/lib/prisma'




export default defineEventHandler(async (event) => {
    assertMethod(event, 'DELETE');

    const postData = await readBody(event)

    try {
        // assert(postData, userVM)


        const user = await db.admissionRahul.delete({
            data: {
                id: parseInt(postData.id)
            },
        })

        return await user;
    } catch (error) {
        return "" + error
    }})
