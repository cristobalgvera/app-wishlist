"use client";

import { useUserStore } from "@app/store";
import { useEffect } from "react";
import "./globals.css";
import Providers from "./providers";

// export const metadata = {
//   title: "Wishlist",
//   description: "¡Mira nuestra lista de deseos!",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  return (
    <html lang="es">
      <Providers>
        <body className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </body>
      </Providers>
    </html>
  );
}
