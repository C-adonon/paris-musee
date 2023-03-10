export async function getOneRandomPainting(
  prisma,
  painterId,
  AllPaintingsLength
) {
  let randomPainting = await prisma.paintings.findFirst({
    where: {
      painter_id: painterId,
    },
    take: 1,
    skip: Math.floor(Math.random() * AllPaintingsLength),
  });
  return randomPainting;
}
