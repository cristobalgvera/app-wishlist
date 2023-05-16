import { WishProduct } from "@app/components";
import { FAKE_DATA } from "./fake-data";

export default function WishList() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {FAKE_DATA.map((product) => (
        <WishProduct key={product.name} {...product} />
      ))}
    </div>
  );
}
