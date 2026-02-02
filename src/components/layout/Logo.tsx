import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
        <Sparkles className="w-6 h-6 text-primary" />
      </div>
      <span className="font-bold text-xl tracking-tight">London Clean</span>
    </Link>
  );
}
