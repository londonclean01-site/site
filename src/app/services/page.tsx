import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | London Clean",
  description: "Explore our comprehensive cleaning services in London. Home, office, disinfection, and more.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Professional cleaning solutions tailored to your needs. From one-off deep cleans to regular office maintenance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TODO: Add Services Grid Component here */}
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Home Cleaning</h3>
          <p className="text-muted-foreground">Comprehensive cleaning for your residence.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Office Cleaning</h3>
          <p className="text-muted-foreground">Keep your workspace professional and hygienic.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-2">Disinfection</h3>
          <p className="text-muted-foreground">Advanced sanitization services.</p>
        </div>
      </div>
    </div>
  );
}
