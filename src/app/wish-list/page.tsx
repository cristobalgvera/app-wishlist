import { getGroupedProducts } from "@app/api";
import { WishListGroup } from "./WishListGroup";

export default async function Page() {
  const groupedProducts = await getGroupedProducts();

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="font-bold text-4xl text-center">Wish List</h1>
      <WishListGroup groupedProducts={groupedProducts} />
    </div>
  );
}
