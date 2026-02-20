"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ product }) {
  return (
    <div className="w-full mx-auto sm:p-8 border-amber-50 rounded-2xl bg-slate-200">
      <Link
        href={`/dashboard`}
        className="text-sm font-medium text-cyan-950 hover:underline border-slate-50 bg-slate-250 shadow-md p-2 rounded-lg"
      >
        Go Back
      </Link>
      <div className="grid lg:grid-cols-2 gap-10 m-4">
        <div className="relative  lg:m-2 md:mx-8 ms:mx-15 mx-4 mt-4 aspect-square bg-white rounded-xl shadow-xl border-amber-50">
          <Image
            src={product?.thumbnail || "/placeholder.png"}
            alt={product?.title}
            fill
            priority
            className="object-contain p-4"
            sizes="(max-width: 100px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase">
            {product?.category}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
            {product?.title}
          </h1>
          <p className="text-lg text-slate-600 ">{product?.description}</p>

          <div className="flex items-center gap-4 pt-4">
            <span className="text-3xl font-bold text-slate-800">
              ${product?.price}
            </span>
            {product?.discountPercentage && (
              <span className="text-slate-500 font-semibold text-sm">
                {product?.discountPercentage}% OFF
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500 uppercase">Rating</p>
              <p className="font-bold text-slate-700">{product?.rating}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-xs text-slate-500 uppercase">Availability</p>
              <p
                className={`font-bold ${product?.stock > 0 ? "text-slate-800" : "text-red-500"}`}
              >
                {product?.stock > 0
                  ? `${product?.stock} in stock`
                  : "Out of Stock"}
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto px-12 py-4 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
