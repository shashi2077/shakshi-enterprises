import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <div className="border border-dashed border-neutral-300 bg-white px-6 py-16 text-center"><h2 className="text-xl font-semibold">No products found</h2><p className="mt-2 text-sm text-neutral-600">Try another search term or category.</p></div>;
  return <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
