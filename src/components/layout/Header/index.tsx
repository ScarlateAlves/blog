"use-client";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-7xl m-auto">
      <nav className="flex justify-between items-center p-6">
        <div className="flex gap-3">
          <Link href="/travel">Travel</Link>
          <Link href="/">Food</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/">Home</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/">Gadgets</Link>
          <Link href="/">Dy</Link>
        </div>
      </nav>
    </header>
  );
};
