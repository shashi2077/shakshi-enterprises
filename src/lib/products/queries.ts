import { activeProducts, productCategories } from "@/data/products";
import type { Product } from "@/types/product";
import { createClient } from "@/lib/supabase/server";
import { hasSupabaseEnvironment } from "@/lib/supabase/config";
import type { ProductRow } from "./database-types";
import { mapProductRow } from "./mapper";

const productSelect = "id,slug,name,short_description,description,featured,active,primary_image,gallery,sizes,specifications,features,advantages,applications,accessories,customization_options,sort_order,categories!inner(name,slug,active)";
export interface PublicCategory { id?: string; name: string; slug: string; description?: string | null; }

function fallbackNotice() { console.warn("[products] Supabase environment is not configured; using version-controlled static catalogue data."); }
async function databaseProducts(filters: { featured?: boolean; slug?: string; categorySlug?: string; limit?: number } = {}): Promise<Product[]> {
  const client = await createClient(); let query = client.from("products").select(productSelect).eq("active", true).eq("categories.active", true).order("sort_order").order("name");
  if (filters.featured !== undefined) query = query.eq("featured", filters.featured);
  if (filters.slug) query = query.eq("slug", filters.slug);
  if (filters.categorySlug) query = query.eq("categories.slug", filters.categorySlug);
  if (filters.limit) query = query.limit(filters.limit);
  const { data, error } = await query; if (error) throw new Error(`Supabase product query failed: ${error.message}`);
  return ((data ?? []) as unknown as ProductRow[]).map(mapProductRow);
}

export async function getActiveProducts(): Promise<Product[]> { if (!hasSupabaseEnvironment()) { fallbackNotice(); return activeProducts; } return databaseProducts(); }
export async function getFeaturedProducts(): Promise<Product[]> { if (!hasSupabaseEnvironment()) return activeProducts.filter((item) => item.featured); return databaseProducts({ featured: true }); }
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> { if (!hasSupabaseEnvironment()) return activeProducts.filter((item) => item.categorySlug === categorySlug); return databaseProducts({ categorySlug }); }
export async function getProductBySlug(slug: string): Promise<Product | undefined> { if (!hasSupabaseEnvironment()) return activeProducts.find((item) => item.slug === slug && item.active); const products = await databaseProducts({ slug, limit: 1 }); return products[0]; }
export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> { const related = await getProductsByCategory(product.categorySlug); return related.filter((item) => item.slug !== product.slug).slice(0, limit); }
export async function getActiveCategories(): Promise<PublicCategory[]> {
  if (!hasSupabaseEnvironment()) return productCategories.map((item) => ({ ...item }));
  const client = await createClient(); const { data, error } = await client.from("categories").select("id,name,slug,description").eq("active", true).order("sort_order").order("name");
  if (error) throw new Error(`Supabase category query failed: ${error.message}`); return data ?? [];
}
