import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-3xl items-center justify-between text-sm lg:flex">
      <div className="grid w-full place-items-center h-60">
        <h1 className="text-3xl font-bold">Bienvenidos/as a la Wish List!</h1>
        <Link href={"wish-list"} className="btn btn-accent btn-lg">
          Wishlist
        </Link>
      </div>
    </main>
  );
}
