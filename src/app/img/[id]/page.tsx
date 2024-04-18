import FullPageImageView from "~/app/components/full-image-page";
import { Modal } from "~/app/components/modal";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  const idAsNumber = +photoId;
  if (Number.isNaN(idAsNumber)) throw new Error("Indvalid photo id");

  return <FullPageImageView id={idAsNumber} />
}

