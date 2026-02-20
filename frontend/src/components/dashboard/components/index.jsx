import { getProducts } from "@/services/productServices/index";
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
