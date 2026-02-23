"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import useProductDetailPage from "../../hooks/useProductDetails";

export default function ProductDetail({ product }) {
  const { handleAddToCart } = useProductDetailPage(product);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 mb-6 text-xs font-bold text-muted hover:text-primary-brand transition-colors uppercase tracking-wider"
      >
        <AiOutlineLeft size={14} />
        Back to Collection
      </Link>

      <div className="bg-card border border-border-base rounded-4xl overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-12 items-center p-6 md:p-10 gap-8">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-70 md:max-w-[320px] lg:max-w-full aspect-square bg-background/50 rounded-2xl border border-border-base/50 p-4">
              <Image
                src={product?.thumbnail || "/placeholder.png"}
                alt={product?.title}
                fill
                priority
                className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <span className="px-3 py-1 bg-primary-brand/10 text-primary-brand text-[10px] font-black uppercase tracking-widest rounded-full inline-block">
                {product?.category}
              </span>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-foreground">
                {product?.title}
              </h1>
              <p className="text-sm text-muted leading-relaxed font-medium line-clamp-3">
                {product?.description}
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-2xl font-black">${product?.price}</span>
              {product?.discountPercentage && (
                <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 font-bold text-[10px] rounded-lg border border-emerald-500/20">
                  -{product?.discountPercentage}% OFF
                </span>
              )}
            </div>

            <div className="max-w-md mx-auto lg:mx-0 space-y-6 pt-4 border-t border-border-base/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-background border border-border-base rounded-xl text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-widest mb-1">
                    Rating
                  </p>
                  <p className="font-black text-sm text-primary-brand">
                    {product?.rating}{" "}
                    <span className="text-muted/50 font-medium">/ 5</span>
                  </p>
                </div>
                <div className="p-3 bg-background border border-border-base rounded-xl text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-widest mb-1">
                    Stock
                  </p>
                  <p
                    className={`font-black text-sm ${product?.stock > 0 ? "text-foreground" : "text-red-500"}`}
                  >
                    {product?.stock > 0
                      ? `${product?.stock} Units`
                      : "Sold Out"}
                  </p>
                </div>
              </div>

              <button
                className="btn-base w-full bg-foreground text-background py-3.5 rounded-xl font-black text-sm hover:bg-primary-brand hover:text-white shadow-lg transition-all active:scale-95"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
