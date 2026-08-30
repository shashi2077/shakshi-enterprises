import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white">
      <Link className="relative aspect-[4/3] overflow-hidden bg-neutral-950" href={`/products/${product.slug}`}>
        <Image alt={product.name} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" src={product.primaryImage} />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-amber-700">{product.category}</p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{product.shortDescription}</p>
        <p className="mt-4 text-xs font-semibold text-neutral-500">{product.sizes[0]?.notes ?? "Available in multiple/custom sizes"}</p>
        <div className="mt-auto grid gap-2 pt-7 sm:grid-cols-2">
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-4 text-sm font-bold text-white hover:bg-neutral-800" href={`/products/${product.slug}`}>View Details<ArrowRight aria-hidden="true" className="size-4" /></Link>
          <Link className="inline-flex min-h-11 items-center justify-center border border-neutral-300 px-4 text-sm font-bold text-neutral-950 hover:border-amber-500" href={`/request-quote?product=${encodeURIComponent(product.slug)}`}>Request Quote</Link>
        </div>
      </div>
    </article>
  );
}
