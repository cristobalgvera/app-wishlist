import { CurrentUser } from "./CurrentUser";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Wishlist - Dani y Cris",
  description: "¡Mira nuestra lista de deseos!",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Providers>
        <body className="flex flex-col min-h-screen gap-y-2 p-12 md:p-24">
          <header className="flex flex-row justify-end">
            <CurrentUser />
          </header>
          <main className="flex flex-col items-center justify-between">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
