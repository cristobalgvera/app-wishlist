import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Wishlist - Dani y Cris",
  description: "¡Mira nuestra lista de deseos!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
