import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex w-screen h-full min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain flex-shrink" />;
      </div>

      <div className="w-56 flex h-full flex-col flex-shrink-0 border-l">
        <div className="text-xl border-b text-center p-2">{image.name}</div>

        <div className="p-2">
          <span>Uploaded by: </span>
          <span>{uploaderInfo.fullName ?? uploaderInfo.username}</span>
        </div>

        <div className="p-2">
          <span>Created On: </span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

      </div>
    </div>
  )
}

