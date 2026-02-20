import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/services/productServices";
import ProductDetail from "@/components/product/components/productDetails";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.slice(0, 10).map((p) => ({ id: p.id.toString() }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | ProductBoard`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

// import { notFound } from "next/navigation";
// import { getProductById } from "@/services/productServices";
// import ProductDetail from "@/components/product/components/productDetails";

// export const dynamic = "force-dynamic";

// export default async function ProductDetailPage({ params }) {
//   const { id } = await params;

//   const product = await getProductById(id);

//   if (!product) {
//     notFound();
//   }

//   return <ProductDetail product={product} />;
// }
