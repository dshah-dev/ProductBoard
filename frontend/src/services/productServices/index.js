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

export async function getProductById(id) {
  const baseUrl = process.env.PRODUCT_URL;

  const res = await fetch(`${baseUrl}/${id}`, {
    next: { revalidate: 60 },
  });
  // console.log("Fetching:", `${baseUrl}/${id}`);

  if (!res.ok) return null;
  return res.json();
}
