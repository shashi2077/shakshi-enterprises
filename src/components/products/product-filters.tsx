"use client";

import { Search } from "lucide-react";

export function ProductFilters({ categories, query, category, onQueryChange, onCategoryChange }: { categories: readonly { name: string; slug: string }[]; query: string; category: string; onQueryChange: (value: string) => void; onCategoryChange: (value: string) => void }) {
  return <div className="grid gap-4 border border-neutral-200 bg-white p-4 md:grid-cols-[1fr_18rem] md:p-5"><label className="relative"><span className="sr-only">Search products</span><Search aria-hidden="true" className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" /><input className="h-12 w-full border border-neutral-300 bg-white pl-12 pr-4 text-sm outline-none focus:border-amber-500" onChange={(event) => onQueryChange(event.target.value)} placeholder="Search products or applications" type="search" value={query} /></label><label><span className="sr-only">Filter by category</span><select className="h-12 w-full border border-neutral-300 bg-white px-4 text-sm outline-none focus:border-amber-500" onChange={(event) => onCategoryChange(event.target.value)} value={category}><option value="all">All categories</option>{categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label></div>;
}
