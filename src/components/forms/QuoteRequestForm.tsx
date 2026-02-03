"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";

const services = [
  "Domestic Cleaning",
  "End of Tenancy Cleaning",
  "Deep Cleaning",
  "After Builders Cleaning",
  "After Party Cleaning",
  "Eco Cleaning",
  "VIP / Luxury Cleaning",
  "Commercial Cleaning",
  "Carpet Cleaning",
  "Window Cleaning",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
}

export function QuoteRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", service: "" });
        
        // Track event in Google Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "quote_request", {
            service: formData.service,
          });
        }
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send request");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-primary-foreground">
          Full Name *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-white/40"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-primary-foreground">
          Phone Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+44 20 1234 5678"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-white/40"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-primary-foreground">
          Email (Optional)
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-white/40"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-primary-foreground">
          Service Required *
        </Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
        >
          <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground focus:border-white/40">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-primary-foreground"
        >
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <p className="text-sm">Thank you! We'll contact you shortly.</p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-primary-foreground"
        >
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Request a Free Quote"
        )}
      </Button>

      <p className="text-xs text-primary-foreground/70 text-center">
        We'll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
