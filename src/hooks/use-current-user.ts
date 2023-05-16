"use client";

export function useCurrentUser() {
  const currentUser = localStorage.getItem("current-user");

  return {
    currentUser,
    isLoggedIn: Boolean(currentUser),
  };
}
