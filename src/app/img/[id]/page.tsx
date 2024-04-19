import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  const idAsNumber = +photoId;
  if (Number.isNaN(idAsNumber)) throw new Error("Indvalid photo id");

  return (
    <div className="h-full">
      <FullPageImageView id={idAsNumber} />
    </div>
  )
}

