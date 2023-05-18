"use client";

import { Product } from "@app/shared";
import { WishProduct } from "./WishProduct";

type WishListProps = {
  listTitle: string;
  addBottomDivider?: boolean;
  products: Product[];
  showMessageIfEmpty?: true;
  messageIfEmpty?: string;
  animateEmpty?: boolean;
};

export function WishList({
  products,
  listTitle,
  addBottomDivider,
  showMessageIfEmpty,
  messageIfEmpty,
  animateEmpty,
}: WishListProps) {
  if (!products.length) {
    if (showMessageIfEmpty)
      return (
        <>
          <h2 className="font-bold text-lg">{listTitle}</h2>
          <p
            className={`text-xl text-center text-gray-400 ${
              animateEmpty ? "animate-bounce" : ""
            }`}
          >
            {messageIfEmpty}
          </p>
          {addBottomDivider ? <div className="divider" /> : null}
        </>
      );

    return null;
  }

  return (
    <>
      <h2 className="font-bold text-lg">{listTitle}</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 xl:gap-x-8">
        {products.map((product) => (
          <WishProduct key={product.id} {...product} />
        ))}
      </div>
      {addBottomDivider ? <div className="divider" /> : null}
    </>
  );
}
