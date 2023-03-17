export async function GetRandomPainters(prisma) {
  return await prisma.$queryRaw`SELECT * FROM Painters ORDER BY RAND() LIMIT 4`;
}
