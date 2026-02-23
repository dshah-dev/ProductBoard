import ProductCard from "@/common/components/card";

export default function ProductList({ initialProducts = [] }) {
  if (initialProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-card rounded-3xl border-2 border-dashed border-border-base">
        <p className="text-muted font-bold tracking-tight">NO PRODUCTS FOUND</p>
      </div>
    );
  }
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between px-2">
        <h1 className="text-4xl font-black text-foreground tracking-tighter">
          Collection
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
        {initialProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
