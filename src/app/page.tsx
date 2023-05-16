import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-3xl items-center justify-between text-sm lg:flex">
      <div>
        <h1>Bienvenidos a la wish list!</h1>
        <Link href={"wish-list"} className="btn btn-accent">
          Wishlist
        </Link>
      </div>
    </main>
  );
}
