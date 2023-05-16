"use client";

import { getGroupedProducts } from "@app/api";
import { GroupedProducts } from "@app/shared";
import { useQuery } from "@tanstack/react-query";

export const useGroupedProducts = (groupedProducts: GroupedProducts) => {
  return useQuery({
    queryKey: ["grouped-products"],
    initialData: groupedProducts,
    queryFn: getGroupedProducts,
  });
};
