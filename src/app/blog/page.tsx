import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning Tips & Advice Blog",
  description: "Expert cleaning tips, guides, and advice for London homes and offices. Learn professional cleaning techniques, eco-friendly methods, and maintenance tips.",
  keywords: [
    "cleaning tips",
    "cleaning advice",
    "cleaning blog",
    "London cleaning tips",
    "home cleaning guide",
    "professional cleaning advice",
  ],
  openGraph: {
    title: "Cleaning Tips & Advice Blog | London Clean",
    description: "Expert cleaning tips and guides for London homes and offices.",
    url: "https://london-clean01.co.uk/blog",
  },
  alternates: {
    canonical: "https://london-clean01.co.uk/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Cleaning Tips & Advice
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guides, tips, and insights to keep your London home or office spotless.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      {post.readingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      )}
                    </div>
                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground mb-4">
              Blog posts coming soon! We're working on bringing you expert cleaning tips and advice.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for professional cleaning guides, eco-friendly tips, and London-specific advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
