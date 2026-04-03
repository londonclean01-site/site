import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden group-hover:scale-105 transition-transform">
        <Image
          src="/favicon.webp"
          alt="London Clean 01 Logo"
          width={80}
          height={80}
          sizes="(max-width: 768px) 64px, 80px"
          className="object-cover"
          priority
          quality={75}
        />
      </div>
      <span className="font-bold text-lg md:text-xl tracking-tight">London Clean 01</span>
    </Link>
  );
}
