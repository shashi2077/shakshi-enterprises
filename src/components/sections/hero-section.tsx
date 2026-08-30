import { ArrowRight, Boxes, ShieldCheck } from "lucide-react";
import Link from "next/link";

function HeroVisual() {
  return (
    <div
      aria-label="Warehouse and industrial storage systems image placeholder"
      className="relative min-h-[23rem] overflow-hidden border border-white/15 bg-neutral-900 sm:min-h-[30rem] lg:min-h-[36rem]"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-x-[8%] bottom-0 top-[18%] border-x border-t border-amber-400/30 bg-neutral-950/60">
        <div className="absolute inset-x-[8%] top-[14%] h-px bg-amber-400/40" />
        <div className="absolute inset-x-[8%] top-[38%] h-px bg-amber-400/40" />
        <div className="absolute inset-x-[8%] top-[62%] h-px bg-amber-400/40" />
        <div className="absolute bottom-0 left-1/3 top-0 w-px bg-amber-400/30" />
        <div className="absolute bottom-0 right-1/3 top-0 w-px bg-amber-400/30" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.16),transparent_34%)]" />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
        <div>
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-amber-400">
            Visual direction
          </span>
          <span className="mt-2 block max-w-52 text-sm text-neutral-300">
            Warehouse and storage systems imagery
          </span>
        </div>
        <Boxes aria-hidden="true" className="size-9 text-amber-400" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />
      <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            <span className="h-px w-10 bg-amber-400" />
            Industrial storage solutions
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">
            Engineered storage systems for businesses built to scale.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
            Shakshi Enterprises helps industrial and commercial teams organise space with dependable storage solutions designed around their operations.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-400 px-6 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:bg-amber-300"
              href="/products"
            >
              View Products
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-950 focus-visible:bg-white focus-visible:text-neutral-950"
              href="/contact#quote"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-neutral-400">
            <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-amber-400" />
            <span>Solution-focused support for business and industrial requirements.</span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
