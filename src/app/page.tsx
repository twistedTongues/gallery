import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/d9e2d0f1-6eb7-4c14-ac1b-1d0974f01611-vj53w9.jpg",
  "https://utfs.io/f/67e04231-b3c2-47e5-b375-f630357e4e4a-1v7r1j.png",
  "https://utfs.io/f/5063f617-d8f1-4ffb-9bd8-992ec6a642d9-y3uau8.png",
  "https://utfs.io/f/b5a779f3-8a83-4627-957f-ca44f59f44f7-w2j5m4.png",
  "https://utfs.io/f/1319d784-3f63-4b23-befb-78dc8d8fed89-w25v9n.png",
  "https://utfs.io/f/1ecedc92-7569-4e87-b306-9537a10ee42c-e2ej7a.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
