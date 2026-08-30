export interface CategoryRow { id: string; name: string; slug: string; description: string | null; active: boolean; sort_order: number; }
export interface ProductRow {
  id: string; slug: string; name: string; short_description: string; description: string;
  featured: boolean; active: boolean; primary_image: string | null; gallery: unknown;
  sizes: unknown; specifications: unknown; features: unknown; advantages: unknown;
  applications: unknown; accessories: unknown; customization_options: unknown; sort_order: number;
  categories: Pick<CategoryRow, "name" | "slug" | "active">;
}
