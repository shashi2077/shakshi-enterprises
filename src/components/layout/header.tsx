import { ChevronRight, Menu, UserRound } from "lucide-react";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" },
  { href: "/track-order", label: "Track Order" },
];

function Brand() {
  return (
    <Link
      aria-label="Shakshi Enterprises home"
      className="group flex shrink-0 items-center gap-3"
      href="/"
    >
      <span className="grid size-10 place-items-center border border-amber-500/70 bg-neutral-950 text-sm font-bold tracking-tight text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
        SE
      </span>
      <span className="leading-none">
        <span className="block text-sm font-bold tracking-[0.16em] text-neutral-950 sm:text-base">
          SHAKSHI
        </span>
        <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.25em] text-neutral-500 sm:text-[0.65rem]">
          ENTERPRISES
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav aria-label="Primary navigation" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-6">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className="text-sm font-medium text-neutral-700 transition-colors hover:text-amber-700 focus-visible:text-amber-700"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-4 md:flex xl:ml-2">
          <Link
            className="flex items-center gap-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-amber-700"
            href="/login"
          >
            <UserRound aria-hidden="true" className="size-4" />
            Customer Login
          </Link>
          <Link
            className="inline-flex h-11 items-center gap-2 bg-neutral-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-amber-500 hover:text-neutral-950"
            href="/contact#quote"
          >
            Request a Quote
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <details className="group relative ml-auto md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center border border-neutral-300 text-neutral-950 transition-colors hover:border-amber-500 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(22rem,calc(100vw-2rem))] border border-neutral-200 bg-white p-5 shadow-2xl">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-neutral-100">
                {navigation.map(({ href, label }) => (
                  <li key={href}>
                    <Link className="flex py-3 text-sm font-semibold text-neutral-800" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-5 grid gap-3">
              <Link className="flex items-center justify-center gap-2 border border-neutral-300 px-4 py-3 text-sm font-semibold" href="/login">
                <UserRound aria-hidden="true" className="size-4" />
                Customer Login
              </Link>
              <Link className="flex items-center justify-center bg-amber-400 px-4 py-3 text-sm font-bold text-neutral-950" href="/contact#quote">
                Request a Quote
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
