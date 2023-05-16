"use client";

import { ChangeEvent, useState } from "react";

export default function CurrentUserModal() {
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState<string>();
  const [error, setError] = useState<string>();

  function setNoUsernameError() {
    setError("Debes ingresar tu nombre de usuario");
  }

  function handleUsernameAdded() {
    if (!username) return setNoUsernameError();

    localStorage.setItem("current-user", username.trim());
    setShowModal(false);
  }

  function handleUsernameChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    setUsername(value);

    if (!value) return setNoUsernameError();

    setError(undefined);
  }

  return (
    <>
      <input
        type="checkbox"
        checked={showModal}
        id="current-user-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Necesitas ingresar para poder usar la aplicación
          </h3>
          <p className="py-4">Elige tu nombre de usuario</p>
          <input
            type="text"
            className="input input-accent w-full"
            value={username}
            onChange={handleUsernameChange}
            onKeyUp={({ key }) => key === "Enter" && handleUsernameAdded()}
          />
          {error && <p className="mt-2 text-red-500">{error}</p>}
          <div className="modal-action">
            <label
              htmlFor="current-user-modal"
              className="btn"
              onClick={handleUsernameAdded}
            >
              Login
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
