import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { ProductsCatalogue } from "@/components/products/products-catalogue";
import { FloatingContactActions } from "@/components/shared/floating-contact-actions";

export const metadata: Metadata = { title: "Industrial Storage Products", description: "Browse industrial lockers, steel cupboards, compactors, racks, filing cabinets, and configurable storage systems from Shakshi Enterprises." };

type Props = { searchParams: Promise<{ category?: string }> };
export default async function ProductsPage({ searchParams }: Props) { const { category } = await searchParams; return <><TopBar /><Header /><main><section className="bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Product catalogue</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Industrial storage built around real operational needs.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">Explore configurable storage categories for factories, warehouses, offices, and commercial facilities. Product sizes are confirmed against each requirement.</p></div></section><section className="bg-neutral-100 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-7xl"><ProductsCatalogue initialCategory={category} /></div></section></main><Footer /><FloatingContactActions /></>; }
