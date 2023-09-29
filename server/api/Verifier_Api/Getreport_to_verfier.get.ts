import db from '~/lib/prisma'
export default defineEventHandler(async (event) => {
  const getReport = await db.requestrecheck.findMany({
    where: {
      VerifierId: null,
      AuthCheck: 'True'
    }
  }).then(async (reports) => {
    const sortedReports = reports.map((report) => report.ReportId)

    const allReports = await db.report.findMany({
      where: {
        Id: {
          in: sortedReports
        }
      },
      include: {
        BillNumber: true
      }
    })
    return allReports
  })

  return getReport;
});