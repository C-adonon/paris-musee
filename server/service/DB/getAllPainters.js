export async function AllPainters(prisma) {
  const painters = await prisma.painters.findMany();
  return painters;
}
