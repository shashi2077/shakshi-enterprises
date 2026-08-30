export interface ProductSize {
  label: string;
  height?: string;
  width?: string;
  depth?: string;
  unit?: string;
  notes?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  featured: boolean;
  active: boolean;
  primaryImage: string;
  gallery: string[];
  sizes: ProductSize[];
  features: string[];
  advantages: string[];
  applications: string[];
  specifications: ProductSpecification[];
  accessories?: string[];
  customizationOptions?: string[];
}
