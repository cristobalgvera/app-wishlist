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
    setCheckedMessage(isMine ? "Ya lo elegiste" : "Ups, ya lo eligieron 🫣");
    setCheckedBackground(isMine ? "bg-cyan-800" : "bg-gray-600");
    setActionMessage(isMine ? "Desmarcar" : "Elegir");
    setActionDisabled(!isMine && checked);
  }, [isMine, checked]);

  useEffect(() => {
    setActionClass(
      actionDisabled
        ? ""
        : "cursor-pointer hover:scale-[1.03] ease-in duration-300"
    );
  }, [actionDisabled]);

  return (
    <div
      className={`card card-side bg-base-100 shadow-xl max-h-48 overflow-hidden ${actionClass}`}
      onClick={handleMutation}
    >
      {checked ? (
        <div
          className={`absolute w-full h-full opacity-80 grid place-content-center ${checkedBackground}`}
        >
          <span className="text-2xl bg-gray-800 rounded px-2">
            {checkedMessage}
          </span>
        </div>
      ) : null}
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>
      <div className="card-body overflow-hidden max-w-xs">
        <h2 className="card-title">{name}</h2>
        <p className="truncate whitespace-break-spaces">{description}</p>
        <div className="card-actions justify-end z-10">
          <button
            className="btn btn-accent btn-sm"
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
