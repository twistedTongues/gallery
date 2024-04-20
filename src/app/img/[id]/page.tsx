import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string },
}) {
  return (
    <div className="h-full">
      <FullPageImageView photoId={photoId} />
    </div>
  )
}

