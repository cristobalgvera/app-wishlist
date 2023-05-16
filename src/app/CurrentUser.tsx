"use client";

import { useUserStore } from "@app/store";

export function CurrentUser() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  if (!user) return null;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-gray-600">
          <span className="flex justify-center items-center font-extrabold uppercase text-xl h-full">
            {user.at(0)}
          </span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li className="menu-title">
          <span>{user}</span>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  );
}
