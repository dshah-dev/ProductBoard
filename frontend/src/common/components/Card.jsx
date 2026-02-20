import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, title, price, thumbnail, category }) {
  return (
    <div className=" bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300">
      <div className="relative bg-slate-100 aspect-square border-slate-200 rounded-t-2xl">
        <Image
          src={thumbnail}
          alt={title}
          fill
          loading="eager"
          className="hover:scale-105 duration-500 object-cover "
          sizes=" (max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {category}
        </span>
        <h2 className="font-bold text-slate-800 text-md mt-1 truncate ">
          {title}
        </h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900">${price}</span>
          <Link
            href={`/dashboard/products/${id}`}
            className="text-sm font-medium text-blue-600 group-hover:underline"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
