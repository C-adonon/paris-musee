export async function GetRandomPainters(prisma) {
  return await prisma.$queryRaw`SELECT * FROM painters ORDER BY RAND() LIMIT 4`;
}
