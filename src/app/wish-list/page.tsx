import { getGroupedProducts } from "@app/api";
import { WishListGroup } from "./WishListGroup";
import Link from "next/link";

export const revalidate = 1800;

export default async function Page() {
  const groupedProducts = await getGroupedProducts();

  return (
    <div className="flex flex-col gap-y-4">
      <Link href="/">
        <h1 className="font-bold text-4xl text-center">Wish List</h1>
      </Link>
      <WishListGroup groupedProducts={groupedProducts} />
    </div>
  );
}
