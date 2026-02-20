import ProductCard from "@/common/components/Card";
// import { Suspense } from "react";
export default function ProductList({ initialProducts = [] }) {
  if (initialProducts.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Our Products</h1>
      </div>
      {/* <Suspense fallback={<ProductSkeletonGrid />}> */}
      <div className="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* </Suspense> */}
    </div>
  );
}

// function ProductSkeletonGrid() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[1, 2, 3, 4, 5, 6].map((i) => (
//         <div
//           key={i}
//           className="h-80 bg-white rounded-2xl animate-pulse border border-slate-100"
//         />
//       ))}
//     </div>
//   );
// }
