"use client";

import { getProducts } from "@app/api";
import { Product } from "@app/shared";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (products: Product[]) => {
  return useQuery({
    queryKey: ["products"],
    initialData: products,
    queryFn: getProducts,
  });
};
