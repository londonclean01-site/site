import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | London Clean",
  description: "Learn about London Clean, our mission, and our expert cleaning team in London.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        We are London's premier cleaning service provider. Founded with a mission to bring hotel-standard cleanliness to homes and offices across the city.
      </p>
    </div>
  );
}
