import type { Product, ProductSize, ProductSpecification } from "@/types/product";
import type { ProductRow } from "./database-types";

const placeholder = "/images/products/product-placeholder.svg";
const strings = (value: unknown): string[] => Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
const objects = <T>(value: unknown): T[] => Array.isArray(value) ? value.filter((item): item is T => Boolean(item) && typeof item === "object") : [];

export function mapProductRow(row: ProductRow): Product {
  return {
    id: row.id, slug: row.slug, name: row.name, category: row.categories.name,
    categorySlug: row.categories.slug, shortDescription: row.short_description,
    description: row.description, featured: row.featured, active: row.active,
    primaryImage: row.primary_image || placeholder, gallery: strings(row.gallery),
    sizes: objects<ProductSize>(row.sizes), specifications: objects<ProductSpecification>(row.specifications),
    features: strings(row.features), advantages: strings(row.advantages), applications: strings(row.applications),
    accessories: strings(row.accessories), customizationOptions: strings(row.customization_options),
  };
}
