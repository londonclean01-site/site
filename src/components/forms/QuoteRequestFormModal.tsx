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
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
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
  services: string[];
  preferredDate: Date | undefined;
  preferredTime: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  services?: string;
  preferredDate?: string;
}

interface QuoteRequestFormModalProps {
  onSuccess?: () => void;
}

export function QuoteRequestFormModal({ onSuccess }: QuoteRequestFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    services: [],
    preferredDate: undefined,
    preferredTime: "",
    comments: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Real-time field validation helpers
  const validateNameInput = (value: string): string => {
    // Remove any characters that are not letters, spaces, hyphens, or apostrophes
    return value.replace(/[^a-zA-Z\s'-]/g, '');
  };

  const validatePhoneInput = (value: string): string => {
    // Only allow digits, +, spaces, parentheses, and hyphens
    return value.replace(/[^0-9+\s()-]/g, '');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation - must contain at least first and last name
    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) {
      newErrors.name = "Full name is required";
    } else if (nameTrimmed.length < 3) {
      newErrors.name = "Please enter your full name (minimum 3 characters)";
    } else if (!/^[a-zA-Z\s'-]+$/.test(nameTrimmed)) {
      newErrors.name = "Name can only contain letters, spaces, hyphens and apostrophes";
    } else if (nameTrimmed.split(' ').filter((word: string) => word.length > 0).length < 2) {
      newErrors.name = "Please enter both first and last name";
    }

    // UK/London Phone validation
    // Accepts: +44, 07, 020, etc.
    // Examples: +447123456789, 07123456789, 020 1234 5678, +44 20 1234 5678
    const phoneTrimmed = formData.phone.trim().replace(/\s/g, '');
    if (!phoneTrimmed) {
      newErrors.phone = "Phone number is required";
    } else {
      // UK mobile: starts with 07 or +447, 11 digits total (with +44) or 11 digits (07...)
      // UK landline: starts with 01 or 02 or +441/+442, 10-11 digits
      const ukMobilePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
      const ukLandlinePattern = /^(\+44\s?[1-2]\d{1,2}|\(?0[1-2]\d{1,2}\)?)\s?\d{3,4}\s?\d{4}$/;
      const internationalPattern = /^\+\d{10,15}$/;
      
      const phoneFormatted = formData.phone.trim();
      const phoneDigitsOnly = phoneTrimmed.replace(/[^0-9+]/g, '');
      
      if (!ukMobilePattern.test(phoneFormatted) && 
          !ukLandlinePattern.test(phoneFormatted) && 
          !internationalPattern.test(phoneDigitsOnly)) {
        newErrors.phone = "Please enter a valid UK phone number (e.g., 07123456789 or 020 1234 5678)";
      }
    }

    // Email validation (optional but must be valid if provided)
    const emailTrimmed = formData.email.trim();
    if (emailTrimmed) {
      // RFC 5322 compliant email regex (simplified)
      const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailPattern.test(emailTrimmed)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Services validation
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.services.join(', '),
          preferredDate: formData.preferredDate ? format(formData.preferredDate, 'yyyy-MM-dd') : '',
          preferredTime: formData.preferredTime,
          comments: formData.comments,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", services: [], preferredDate: undefined, preferredTime: "", comments: "" });
        setErrors({});
        
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "quote_request", {
            service: formData.services.join(', '),
          });
          
          // Track Google Ads conversion
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17933465567/bFk3CKr17fMbEN_vq-dC",
          });
        }

        if (onSuccess) {
          setTimeout(() => onSuccess(), 2000);
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

  const handleServiceToggle = (service: string) => {
    let updatedServices;
    if (formData.services.includes(service)) {
      updatedServices = formData.services.filter(s => s !== service);
    } else {
      updatedServices = [...formData.services, service];
    }
    setFormData({ ...formData, services: updatedServices });
    if (errors.services && updatedServices.length > 0) {
      setErrors({ ...errors, services: undefined });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="modal-name">
          Full Name *
        </Label>
        <Input
          id="modal-name"
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => {
            const sanitizedValue = validateNameInput(e.target.value);
            setFormData({ ...formData, name: sanitizedValue });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          onBlur={() => {
            // Validate on blur for immediate feedback
            const nameTrimmed = formData.name.trim();
            if (nameTrimmed && nameTrimmed.length > 0) {
              if (nameTrimmed.length < 3) {
                setErrors({ ...errors, name: "Please enter your full name (minimum 3 characters)" });
              } else if (nameTrimmed.split(' ').filter((word: string) => word.length > 0).length < 2) {
                setErrors({ ...errors, name: "Please enter both first and last name" });
              }
            }
          }}
          required
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="modal-phone">
          Phone Number *
        </Label>
        <Input
          id="modal-phone"
          type="tel"
          placeholder="+44 7123 456 789 or 020 1234 5678"
          value={formData.phone}
          onChange={(e) => {
            const sanitizedValue = validatePhoneInput(e.target.value);
            setFormData({ ...formData, phone: sanitizedValue });
            if (errors.phone) setErrors({ ...errors, phone: undefined });
          }}
          onBlur={() => {
            // Validate on blur for immediate feedback
            const phoneTrimmed = formData.phone.trim().replace(/\s/g, '');
            if (phoneTrimmed && phoneTrimmed.length > 0) {
              const phoneFormatted = formData.phone.trim();
              const phoneDigitsOnly = phoneTrimmed.replace(/[^0-9+]/g, '');
              const ukMobilePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
              const ukLandlinePattern = /^(\+44\s?[1-2]\d{1,2}|\(?0[1-2]\d{1,2}\)?)\s?\d{3,4}\s?\d{4}$/;
              const internationalPattern = /^\+\d{10,15}$/;
              
              if (!ukMobilePattern.test(phoneFormatted) && 
                  !ukLandlinePattern.test(phoneFormatted) && 
                  !internationalPattern.test(phoneDigitsOnly)) {
                setErrors({ ...errors, phone: "Please enter a valid UK phone number (e.g., +44 7123 456 789 or 020 1234 5678)" });
              }
            }
          }}
          required
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="modal-email">
          Email (Optional)
        </Label>
        <Input
          id="modal-email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">
          Services Required *
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-60 overflow-y-auto p-1">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox 
                id={`modal-service-${service}`} 
                checked={formData.services.includes(service)}
                onCheckedChange={() => handleServiceToggle(service)}
              />
              <Label htmlFor={`modal-service-${service}`} className="text-sm cursor-pointer">
                {service}
              </Label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="text-xs text-red-500 mt-1">{errors.services}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDate">
          Preferred Date
        </Label>
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              id="preferredDate"
              variant={"outline"}
              className={`w-full justify-start text-left font-normal ${errors.preferredDate ? "border-red-500" : ""}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.preferredDate ? format(formData.preferredDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formData.preferredDate}
              onSelect={(day) => {
                setFormData({ ...formData, preferredDate: day });
                setIsCalendarOpen(false);
                if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
              }}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
        {errors.preferredDate && (
          <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredTime">
          Preferred Time
        </Label>
        <Select
          value={formData.preferredTime}
          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
        >
          <SelectTrigger>
            <ClockIcon className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Morning (8:00 - 12:00)",
              "Afternoon (12:00 - 16:00)",
              "Evening (16:00 - 20:00)",
              "Anytime"
            ].map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">
          Additional Comments
        </Label>
        <Textarea
          id="comments"
          placeholder="Any additional information or specific requirements..."
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          className="h-24"
        />
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
        >
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <p className="text-sm">Thank you! We'll contact you shortly.</p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
        >
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full"
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

      <p className="text-xs text-muted-foreground text-center">
        We'll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
