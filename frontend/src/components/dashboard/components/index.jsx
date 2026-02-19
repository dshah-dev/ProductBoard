import { getProducts } from "@/services/productService";
import UpperBoard from "./main";
const dashboard = async () => {
  const products = await getProducts();
  return (
    <>
      <UpperBoard products={products} />
    </>
  );
};

export default dashboard;
