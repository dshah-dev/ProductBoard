"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineDelete } from "react-icons/ai";
import useCart from "../hooks/usecart";

export default function CartPage() {
  const { cartItems, totalPrice, removeItem } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-black tracking-tight">Your cart</h1>
        <Link
          href="/dashboard"
          className="text-xs font-bold text-muted hover:text-primary-brand flex items-center gap-2 uppercase tracking-widest"
        >
          <AiOutlineArrowLeft /> Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-4xl border border-dashed border-border-base">
          <p className="text-muted font-medium mb-4">
            Your cart is currently empty.
          </p>
          <Link
            href="/dashboard"
            className="btn-base bg-foreground text-background px-8 py-3 rounded-xl"
          >
            Go To Collections
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center gap-4 p-4 bg-card border border-border-base rounded-2xl"
              >
                <div className="relative w-20 h-20 bg-background rounded-lg overflow-hidden">
                  <Image
                    src={
                      item.thumbnail !== ""
                        ? item.thumbnail
                        : "/placeholder.png"
                    }
                    priority
                    alt={item.title || "Product image"}
                    fill
                    className="object-contain p-2"
                    sizes="max-w-[1080px]"
                  />
                </div>
                <div className="grow">
                  <h3 className="font-bold text-sm text-foreground leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-2 pt-1 text-green-400">
                    -{item?.discountPercentage}% OFF
                  </p>
                  <p className="text-sm font-black text-primary-brand">
                    ${item.price}{" "}
                    <span className="text-muted font-normal text-xs">
                      x {item.quantity}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-muted hover:text-red-500 transition-colors"
                >
                  <AiOutlineDelete size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border-base rounded-4xl p-6 sticky top-24">
              <h2 className="text-lg font-black mb-4">Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="font-bold text-emerald-500">FREE</span>
                </div>
                <div className="pt-3 border-t border-border-base flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="text-xl font-black text-primary-brand">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="btn-base w-full bg-foreground text-background py-4 rounded-xl font-black text-sm hover:bg-primary-brand transition-all">
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
