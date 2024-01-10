import Link from "next/link";

export default function Nav() {
  return (
    <div className="max-w-5xl mx-auto">
      <nav className="p-10 flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-xl">Graphitti</span>
        </Link>
      </nav>
    </div>
  );
}
