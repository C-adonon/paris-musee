export async function getOnePainter(prisma, painterId) {
  let painter = await prisma.painters.findUnique({
    where: {
      id: painterId,
    },
  });
  return painter;
}
