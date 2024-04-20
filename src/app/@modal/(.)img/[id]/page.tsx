import FullPageImageView from "~/app/components/full-image-page";
import { Modal } from "~/app/components/modal";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  )
}

