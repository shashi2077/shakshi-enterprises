"use client";

import { useMemo, useState } from "react";
import { activeProducts, productCategories } from "@/data/products";
import { ProductFilters } from "./product-filters";
import { ProductGrid } from "./product-grid";

export function ProductsCatalogue({ initialCategory = "all" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(productCategories.some((item) => item.slug === initialCategory) ? initialCategory : "all");
  const filtered = useMemo(() => { const needle = query.trim().toLowerCase(); return activeProducts.filter((item) => (category === "all" || item.categorySlug === category) && (!needle || [item.name, item.category, item.shortDescription, ...item.applications].join(" ").toLowerCase().includes(needle))); }, [query, category]);
  return <><ProductFilters categories={productCategories} query={query} category={category} onQueryChange={setQuery} onCategoryChange={setCategory} /><p aria-live="polite" className="my-6 text-sm text-neutral-500">Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}</p><ProductGrid products={filtered} /></>;
}
