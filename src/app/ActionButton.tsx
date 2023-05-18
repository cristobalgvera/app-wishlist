import Link from "next/link";

export function ActionButton() {
  return (
    <Link href="wish-list" className="btn btn-lg btn-primary dark:btn-accent">
      Busca tu regalo aquí
    </Link>
  );
}
