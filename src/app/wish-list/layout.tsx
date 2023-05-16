"use client";

import { CurrentUserModal } from "@app/components";
import { useCurrentUser } from "@app/hooks";
import { ReactNode } from "react";

export default function WishListLayout({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useCurrentUser();

  return (
    <>
      {!isLoggedIn && <CurrentUserModal />}
      {children}
    </>
  );
}
