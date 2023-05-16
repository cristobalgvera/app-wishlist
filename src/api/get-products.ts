import { axiosClient, Product } from "@app/shared";
import { AxiosError } from "axios";

export async function getProducts() {
  try {
    const { data } = await axiosClient.get<Product[]>("/v1/wish-list");
    return data;
  } catch (error) {
    if (error instanceof AxiosError)
      throw new Error(`Unable to fetch products: ${JSON.stringify(error.config)}`);

    throw new Error(`Unable to fetch products`);
  }
}
