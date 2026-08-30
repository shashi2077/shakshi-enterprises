import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HeroVisual() {
  return (
    <div className="relative aspect-[4/3] min-h-[22rem] overflow-hidden border border-white/15 bg-neutral-900 sm:min-h-[29rem] lg:min-h-[34rem]">
      <Image alt="Industrial warehouse storage racks" className="object-cover" fill priority sizes="(min-width: 1024px) 48vw, 100vw" src="/images/hero/warehouse-placeholder.svg" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-neutral-950/35 p-5 backdrop-blur-[2px] sm:p-7">
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-amber-400">Built around your operation</span>
        <span className="mt-2 block max-w-md text-sm leading-6 text-neutral-200">Practical storage systems planned for demanding industrial and commercial spaces.</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />
      <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-400 sm:mb-7 sm:text-xs">
            <span className="h-px w-8 bg-amber-400 sm:w-10" />
            Industrial storage solutions
          </div>
          <h1 className="max-w-[12ch] text-balance text-[2.55rem] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[4.35rem]">Engineered storage systems for businesses built to scale.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-300 sm:mt-7 sm:text-lg sm:leading-8">Shakshi Enterprises helps industrial and commercial teams organise space with dependable storage solutions designed around their operations.</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-400 px-6 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:bg-amber-300" href="/products">View Products<ArrowRight aria-hidden="true" className="size-4" /></Link>
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-950 focus-visible:bg-white focus-visible:text-neutral-950" href="/contact#quote">Request a Quote</Link>
          </div>
          <div className="mt-9 flex items-start gap-3 border-t border-white/15 pt-6 text-sm leading-6 text-neutral-400 sm:mt-10 sm:items-center">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-400 sm:mt-0" />
            <span>Solution-focused support for business and industrial requirements.</span>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
