import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const cookie = JSON.parse(getCookie(event, 'user'))


    const postdata = await readBody(event);
    try {
        const decision = await prisma.decision.findMany({
            where: {
                VendorModelId: cookie.VendorModelId,
                Role: cookie.Role,
            },
            select: {
                ReportId: true,
            },
        });

        const Id = decision.map((decision) => decision.ReportId);

        const verfierrejected = await prisma.decision.findMany({
            where: {
                ReportId: {
                    in: Id,
                },
                Verifier: "Rejected",
            },
        });




        return verfierrejected;

    } catch (error) {
        return error;
    }

});