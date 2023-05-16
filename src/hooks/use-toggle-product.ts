"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProduct } from "@app/api/toggle-product";
import { useUserStore } from "@app/store";

export const useToggleProduct = (id: number) => {
  const queryClient = useQueryClient();
  const user = useUserStore((state) => state.user);

  return useMutation({
    mutationKey: ["toggle-product", id, user],
    mutationFn: () => toggleProduct(id, user!),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["grouped-products"] }),
  });
};
