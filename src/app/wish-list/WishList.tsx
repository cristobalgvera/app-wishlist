"use client";

import { useProducts } from "@app/hooks";
import { Product } from "@app/shared";
import { useUserStore } from "@app/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { WishProduct } from "./WishProduct";

interface WishListProps {
  products: Product[];
}

export default function WishList({ products }: WishListProps) {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const { data } = useProducts(products);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {data.map((product) => (
        <WishProduct key={product.name} {...product} currentUser={user!} />
      ))}
    </div>
  );
}
