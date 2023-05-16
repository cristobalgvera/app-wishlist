"use client";

import { useToggleProduct } from "@app/hooks";
import { Product } from "@app/shared";
import { useEffect, useMemo, useState } from "react";

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
  const [checkedMessage, setCheckedMessage] = useState<string>("");
  const [checkedBackground, setCheckedBackground] = useState<string>("");
  const [actionMessage, setActionMessage] = useState<"Elegir" | "Desmarcar">(
    "Elegir"
  );
  const [actionDisabled, setActionDisabled] = useState<boolean>(false);
  const [actionClass, setActionClass] = useState<string>("");

  const isMine = useMemo(
    () => currentUser === checkedBy,
    [currentUser, checkedBy]
  );

  function handleMutation() {
    if (!actionDisabled) mutation.mutate();
  }

  useEffect(() => {
    setCheckedMessage(isMine ? "Ya lo elegiste 😉" : "Ya lo eligieron 🫣");
    setCheckedBackground(
      isMine ? "bg-cyan-400 dark:bg-cyan-800" : "bg-gray-500 dark:bg-gray-700"
    );
    setActionMessage(isMine ? "Desmarcar" : "Elegir");
    setActionDisabled((!isMine && checked) || mutation.isLoading);
  }, [isMine, checked, mutation.isLoading]);

  useEffect(() => {
    setActionClass(
      actionDisabled
        ? ""
        : "cursor-pointer hover:scale-[1.03] ease-in duration-300"
    );
  }, [actionDisabled]);

  return (
    <div
      className={`card md:card-side bg-base-100 shadow-xl h-96 max-h-96 md:h-64 md:max-h-64 overflow-hidden ${actionClass}`}
      onClick={handleMutation}
    >
      {checked ? (
        <div
          className={`absolute w-full h-full opacity-80 grid place-content-center ${checkedBackground}`}
        >
          <span className="text-2xl bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
            {checkedMessage}
          </span>
        </div>
      ) : null}
      {mutation.isLoading ? (
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
            onClick={handleMutation}
          >
            {actionMessage}
          </button>
        </div>
      </div>
    </div>
  );
}
