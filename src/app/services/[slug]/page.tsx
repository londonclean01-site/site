import { notFound } from "next/navigation";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${title} Service | London Clean`,
    description: `Professional ${title} services in London. Book now for exceptional quality.`,
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Comprehensive {title.toLowerCase()} solutions for London clients. 
        We use eco-friendly products and advanced techniques to ensure the best results.
      </p>
      {/* Detailed content would go here */}
    </div>
  );
}
