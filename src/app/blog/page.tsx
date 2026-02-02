import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | London Clean",
  description: "Cleaning tips, industry news, and updates from London Clean.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Latest news and cleaning tips for Londoners.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-muted" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">5 Tips for a Dust-Free Home</h2>
            <p className="text-muted-foreground text-sm mb-4">Read our expert advice on maintaining air quality...</p>
            <span className="text-primary font-medium text-sm">Read More →</span>
          </div>
        </article>
      </div>
    </div>
  );
}
