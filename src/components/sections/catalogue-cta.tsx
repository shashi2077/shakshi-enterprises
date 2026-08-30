import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function CatalogueCta() {
  return (
    <section aria-labelledby="catalogue-heading" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-amber-400 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full border-[40px] border-neutral-950/5" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-3xl items-start gap-5">
            <span className="hidden size-14 shrink-0 place-items-center bg-neutral-950 text-amber-400 sm:grid">
              <BookOpen aria-hidden="true" className="size-6" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-700">Product catalogue</p>
              <h2 id="catalogue-heading" className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                Explore Our Complete Storage Range
              </h2>
            </div>
          </div>
          <Link className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-neutral-950 px-6 text-sm font-bold text-white transition-colors hover:bg-white hover:text-neutral-950 focus-visible:bg-white focus-visible:text-neutral-950" href="/catalogue">
            Download Product Catalogue
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
