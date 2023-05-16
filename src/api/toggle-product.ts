import { axiosClient } from "@app/shared";
import { AxiosError } from "axios";

export function toggleProduct(id: number, toggledBy: string) {
  try {
    return axiosClient.patch<void>(`/v1/wish-list/${id}`, { toggledBy });
  } catch (error) {
    if (error instanceof AxiosError)
      throw new Error(`Unable to toggle product: ${error.message}`);

    throw new Error(`Unable to toggle product`);
  }
}
