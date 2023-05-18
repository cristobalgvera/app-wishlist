"use client";

import { useUserStore } from "@app/store";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export function Login() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>();
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  const pushToWishList = useCallback(() => {
    router.push("/wish-list");
  }, [router]);

  useEffect(() => {
    if (user) pushToWishList();
  }, [user, pushToWishList]);

  function setNoUsernameError() {
    setError("Debes ingresar tu nombre de usuario");
  }

  function handleUsernameAdded() {
    if (!username) return setNoUsernameError();

    setUser(username.trim());
    pushToWishList();
  }

  function handleUsernameChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setUsername(value);

    if (!value) return setNoUsernameError();

    setError(undefined);
  }

  return (
    <div>
      <input readOnly checked type="checkbox" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Necesitas ingresar para poder usar la aplicación
          </h3>
          <p className="py-4">Elige tu nombre de usuario</p>
          <input
            type="text"
            className="input input-primary dark:input-accent w-full"
            value={username}
            onChange={handleUsernameChange}
            onKeyUp={({ key }) => key === "Enter" && handleUsernameAdded()}
          />
          {error ? <p className="mt-2 text-red-500">{error}</p> : null}
          <div className="modal-action">
            <button
              className="btn btn-primary dark:btn-accent"
              disabled={!!error}
              onClick={handleUsernameAdded}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
