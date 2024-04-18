import { getImage } from "~/server/queries"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  const idAsNumber = +photoId;
  if (Number.isNaN(idAsNumber)) throw new Error("Indvalid photo id");
  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  )
}

