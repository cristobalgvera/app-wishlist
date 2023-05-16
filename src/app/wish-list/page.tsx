import { getProducts } from "@app/api";
import WishList from "./WishList";

export default async function Page() {
  const products = await getProducts();

  return <WishList products={products} />;
}
