import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const data = await response.json();
  return (
    <PhotoList photos={data} />
  );
}
