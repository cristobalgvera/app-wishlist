"use client";

import { Product } from "@app/shared";
import { useUserStore } from "@app/store";
import { WishProduct } from "./WishProduct";

interface WishListProps {
  listTitle: string;
  addBottomDivider?: boolean;
  products: Product[];
}

export function WishList({
  products,
  listTitle,
  addBottomDivider,
}: WishListProps) {
  const user = useUserStore((state) => state.user);

  if (!products.length) return null;

  return (
    <>
      <h2 className="font-bold text-lg">{listTitle}</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 xl:gap-x-8">
        {products.map((product) => (
          <WishProduct key={product.id} {...product} currentUser={user!} />
        ))}
      </div>
      {addBottomDivider ? <div className="divider" /> : null}
    </>
  );
}
