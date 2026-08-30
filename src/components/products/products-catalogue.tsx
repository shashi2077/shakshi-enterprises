"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import type { PublicCategory } from "@/lib/products/queries";
import { ProductFilters } from "./product-filters";
import { ProductGrid } from "./product-grid";

export function ProductsCatalogue({ products, categories, initialCategory = "all" }: { products: Product[]; categories: PublicCategory[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories.some((item) => item.slug === initialCategory) ? initialCategory : "all");
  const filtered = useMemo(() => { const needle = query.trim().toLowerCase(); return products.filter((item) => (category === "all" || item.categorySlug === category) && (!needle || [item.name, item.category, item.shortDescription, ...item.applications].join(" ").toLowerCase().includes(needle))); }, [products, query, category]);
  return <><ProductFilters categories={categories} query={query} category={category} onQueryChange={setQuery} onCategoryChange={setCategory} /><p aria-live="polite" className="my-6 text-sm text-neutral-500">Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}</p><ProductGrid products={filtered} /></>;
}
