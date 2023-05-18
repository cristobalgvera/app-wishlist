"use client";

import { Toast } from "@app/components";
import { useGroupedProducts } from "@app/hooks";
import { GroupedProducts, Product } from "@app/shared";
import { useUserStore } from "@app/store";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { WishList } from "./WishList";

interface WishListGroupProps {
  groupedProducts: GroupedProducts;
}

export function WishListGroup({ groupedProducts }: WishListGroupProps) {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const {
    data: { checkedProducts, uncheckedProducts },
  } = useGroupedProducts(groupedProducts);

  const myProducts = useMemo<Product[]>(
    () => checkedProducts.filter((product) => product.checkedBy === user),
    [user, checkedProducts]
  );
  const otherProducts = useMemo<Product[]>(
    () => checkedProducts.filter((product) => product.checkedBy !== user),
    [user, checkedProducts]
  );

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return (
    <div className="grid grid-cols-1 gap-6">
      <WishList
        listTitle="💝 Elegidos por ti"
        products={myProducts}
        addBottomDivider
        showMessageIfEmpty
        animateEmpty
        messageIfEmpty="¡Aún no has elegido nada de la wishlist!"
      />
      <WishList
        listTitle="🎁 Por elegir"
        products={uncheckedProducts}
        addBottomDivider
        showMessageIfEmpty
        messageIfEmpty="¡Ya no hay nada más que elegir!"
      />
      <WishList listTitle="💐 Elegidos por otros" products={otherProducts} />
      <Toast />
    </div>
  );
}
