"use client";

import { Product } from "@app/shared";
import { useWishProduct } from "./useWishProduct";
import { toast } from "react-toastify";

interface WishProductProps extends Product {}

export function WishProduct({
  id,
  name,
  checked,
  description,
  imageUrl,
  checkedBy,
}: WishProductProps) {
  const {
    toggleProductMutation,
    checkedMessage,
    checkedBackground,
    actionMessage,
    actionDisabled,
    actionClass,
  } = useWishProduct({ id, checked, checkedBy });

  function handleMutation() {
    if (actionDisabled) return;

    toggleProductMutation.mutate(undefined, {
      onSuccess: () =>
        toast.success(checked ? "Producto desmarcado" : "Producto marcado", {
          icon: checked ? "🙁" : "🥳",
        }),
    });
  }

  return (
    <div
      className={`card md:card-side bg-base-100 shadow-xl h-96 max-h-96 md:h-64 md:max-h-64 overflow-hidden ${actionClass}`}
      onClick={handleMutation}
    >
      {checked ? (
        <div
          className={`absolute w-full h-full opacity-80 grid place-content-center ${checkedBackground}`}
        >
          <span className="text-2xl font-semibold bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
            {checkedMessage}
          </span>
        </div>
      ) : null}
      {toggleProductMutation.isLoading ? (
        <div
          className={`absolute w-full h-full flex justify-center items-center opacity-80 ${checkedBackground}`}
        >
          <progress className="progress progress-info w-3/12" />
        </div>
      ) : null}
      <figure className="h-2/5 md:h-auto md:w-5/12">
        <img src={imageUrl} alt={name} className="object-cover h-full w-full" />
      </figure>
      <div className="card-body h-3/5 md:h-auto md:w-7/12 overflow-hidden w-full p-6">
        <h2 className="card-title">{name}</h2>
        <p className="truncate whitespace-break-spaces">{description}</p>
        <div className="card-actions justify-end z-10">
          <button
            className="btn dark:btn-accent btn-primary btn-sm"
            disabled={actionDisabled}
          >
            {actionMessage}
          </button>
        </div>
      </div>
    </div>
  );
}
