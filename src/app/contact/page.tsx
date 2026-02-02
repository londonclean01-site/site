import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us | London Clean",
  description: "Get in touch with London Clean for a quote or booking. Serving all London boroughs.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Ready to experience a cleaner space? Fill out the form below or call us directly.
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" placeholder="Inquiry about Home Cleaning" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" placeholder="Tell us about your cleaning needs..." className="min-h-[150px]" />
          </div>
          
          <Button size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
