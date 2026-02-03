"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QuoteRequestFormModal } from "@/components/forms/QuoteRequestFormModal";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request a Free Quote</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-muted-foreground mb-6">
            Fill out the form and we'll get back to you within 24 hours
          </p>
          <QuoteRequestFormModal onSuccess={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
