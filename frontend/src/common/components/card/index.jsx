import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function ProductCard({ id, title, price, thumbnail, category }) {
  return (
    <div className="group bg-card border border-border-base rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-brand/10 transition-all duration-500 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted/5">
        <div className="absolute top-1 left-1">
          <span className="px-0.5 py-0.5 text-[10px] bg-muted/10 font-black backdrop-blur-md text-foreground rounded-lg shadow-sm uppercase border border-border-base">
            {category}
          </span>
        </div>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="group-hover:scale-110 transition-transform duration-700 object-cover mt-3"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      <div className="p-4 flex flex-col grow ">
        <h2 className="font-bold text-foreground text-sm line-clamp-1 group-hover:text-primary-brand transition-colors">
          {title}
        </h2>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-black text-foreground">${price}</span>
          <Link
            href={`/dashboard/products/${id}`}
            className="h-9 w-9 flex items-center justify-center rounded-xl bg-muted/10 text-muted hover:bg-primary-brand hover:text-white transition-all active:scale-90"
          >
            <FaPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
