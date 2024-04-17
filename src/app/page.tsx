import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await getMyImages();
  return (<div className="flex flex-wrap justify-center gap-4">
    {images.map((image) => (
      <div key={image.id} className="flex flex-col w-48 h-48">
        <Image src={image.url} alt={image.name}
          width={192}
          height={192}
        />
        <div>{image.name}</div>
      </div>
    ))}
  </div>)
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
