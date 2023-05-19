import { useToggleProduct } from "@app/hooks";
import { useUserStore } from "@app/store";
import { useState, useMemo, useEffect } from "react";

interface UseWishProductProps {
  id: number;
  checked: boolean;
  checkedBy?: string;
}

export const useWishProduct = ({
  id,
  checked,
  checkedBy,
}: UseWishProductProps) => {
  const mutation = useToggleProduct(id);
  const currentUser = useUserStore((state) => state.user);

  const [checkedMessage, setCheckedMessage] = useState("");
  const [checkedBackground, setCheckedBackground] = useState("");
  const [actionMessage, setActionMessage] = useState("Elegir");
  const [actionDisabled, setActionDisabled] = useState(false);
  const [actionClass, setActionClass] = useState("");

  const isMine = useMemo(
    () => currentUser?.toLocaleLowerCase() === checkedBy?.toLocaleLowerCase(),
    [currentUser, checkedBy]
  );

  useEffect(() => {
    setCheckedMessage(isMine ? "Ya lo elegiste 😉" : "Ya lo eligieron 🫣");
    setCheckedBackground(
      isMine ? "bg-gray-300 dark:bg-cyan-800" : "bg-gray-500 dark:bg-gray-700"
    );
    setActionMessage(isMine ? "Quitar" : "Seleccionar");
    setActionDisabled((!isMine && checked) || mutation.isLoading);
  }, [isMine, checked, mutation.isLoading]);

  useEffect(() => {
    setActionClass(
      actionDisabled
        ? ""
        : "cursor-pointer hover:scale-[1.03] ease-in duration-300"
    );
  }, [actionDisabled]);

  return {
    toggleProductMutation: mutation,
    checkedMessage,
    checkedBackground,
    actionMessage,
    actionDisabled,
    actionClass,
  };
};
