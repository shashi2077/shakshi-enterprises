import Image from "next/image";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) { return <div className="relative aspect-[4/3] overflow-hidden border border-neutral-200 bg-neutral-950"><Image alt={product.name} className="object-cover" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={product.primaryImage} /></div>; }
