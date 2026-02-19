
export async function getProducts() {
  const baseUrl = process.env.PRODUCT_URL;
  const res = await fetch(`${baseUrl}`, {
    // cache: "no-store",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products ?? [];
}
