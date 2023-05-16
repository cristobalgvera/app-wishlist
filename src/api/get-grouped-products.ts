import { GroupedProducts, axiosClient } from "@app/shared";
import { AxiosError } from "axios";

export async function getGroupedProducts() {
  try {
    const { data } = await axiosClient.get<GroupedProducts>("/v1/wish-list");
    return data;
  } catch (error) {
    if (error instanceof AxiosError)
      throw new Error(
        `Unable to fetch products: ${JSON.stringify(error.config)}`
      );

    throw new Error(`Unable to fetch products`);
  }
}
