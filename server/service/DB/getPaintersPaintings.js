export async function getPaintersPaintings(prisma, painterId) {
  let paintings = await prisma.paintings.findMany({
    where: {
      painter_id: painterId,
    },
  });
  return paintings;
}