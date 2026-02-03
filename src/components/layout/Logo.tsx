import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden group-hover:scale-105 transition-transform">
        <Image
          src="/favicon.png"
          alt="London Clean Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <span className="font-bold text-lg md:text-xl tracking-tight">London Clean</span>
    </Link>
  );
}
