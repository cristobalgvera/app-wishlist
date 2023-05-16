"use client";

import { useToggleProduct } from "@app/hooks";
import { Product } from "@app/shared";

interface WishProductProps extends Product {
  currentUser: string;
}

export function WishProduct({
  id,
  name,
  checked,
  description,
  imageUrl,
  currentUser,
  checkedBy,
}: WishProductProps) {
  const mutation = useToggleProduct(id);

  return (
    <div className="card card-side bg-base-100 shadow-xl max-h-48 overflow-hidden">
      {checked ? (
        <div className="absolute w-full h-full bg-gray-600 opacity-80 grid place-content-center">
          <span className="text-2xl bg-gray-800 rounded px-2">
            Ups, ya lo eligieron 🫣
          </span>
        </div>
      ) : null}
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body overflow-hidden max-w-xs">
        <h2 className="card-title">{name}</h2>
        <p className="truncate whitespace-break-spaces">{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-sm"
            disabled={checked}
            onClick={() => mutation.mutate()}
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
