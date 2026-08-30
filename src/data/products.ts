import type { Product } from "@/types/product";

export const productCategories = [
  { name: "Industrial Lockers", slug: "industrial-lockers" },
  { name: "Steel Cupboards", slug: "steel-cupboards" },
  { name: "Mobile Compactors", slug: "mobile-compactors" },
  { name: "Slotted Angle Racks", slug: "slotted-angle-racks" },
  { name: "Heavy Duty Racks", slug: "heavy-duty-racks" },
  { name: "Pallet Racking Systems", slug: "pallet-racking-systems" },
  { name: "Warehouse Storage Systems", slug: "warehouse-storage-systems" },
  { name: "File Cabinets", slug: "file-cabinets" },
  { name: "Industrial Furniture", slug: "industrial-furniture" },
  { name: "Customized Storage Solutions", slug: "customized-storage-solutions" },
] as const;

type Seed = Pick<Product, "slug" | "name" | "category" | "categorySlug" | "shortDescription" | "description" | "features" | "advantages" | "applications"> & Partial<Pick<Product, "featured" | "accessories" | "customizationOptions">>;

const placeholder = "/images/products/product-placeholder.svg";

function product(seed: Seed, index: number): Product {
  return {
    id: `product-${String(index + 1).padStart(2, "0")}`,
    featured: seed.featured ?? false,
    active: true,
    primaryImage: placeholder,
    gallery: [placeholder],
    sizes: [{ label: "Custom sizing", notes: "Available in multiple/custom sizes" }],
    specifications: [
      { label: "Configuration", value: "Planned according to the selected product and application" },
      { label: "Available sizes", value: "Available in multiple/custom sizes" },
    ],
    customizationOptions: seed.customizationOptions ?? ["Dimensions", "Internal configuration", "Finish and colour options"],
    ...seed,
  };
}

const seeds: Seed[] = [
  { slug: "multi-door-industrial-locker", name: "Multi-Door Industrial Locker", category: "Industrial Lockers", categorySlug: "industrial-lockers", featured: true, shortDescription: "Compartment-based personal storage for industrial and workforce environments.", description: "A configurable locker system intended to organise personal belongings and issued equipment in shared workplaces.", features: ["Individual storage compartments", "Door-based organisation", "Configurable compartment layout"], advantages: ["Supports orderly shared facilities", "Helps separate individual storage"], applications: ["Factories", "Warehouses", "Staff changing areas"], accessories: ["Label holders", "Internal shelves where required"] },
  { slug: "pigeon-hole-locker", name: "Pigeon Hole Locker", category: "Industrial Lockers", categorySlug: "industrial-lockers", shortDescription: "Compact multi-compartment storage for organised item allocation.", description: "A pigeon-hole format locker designed for separating smaller items, documents, or personal effects by user or department.", features: ["Multiple individual compartments", "Space-conscious layout", "Clear compartment organisation"], advantages: ["Simplifies item allocation", "Keeps smaller items separated"], applications: ["Offices", "Institutions", "Industrial facilities"] },
  { slug: "double-door-steel-cupboard", name: "Double Door Steel Cupboard", category: "Steel Cupboards", categorySlug: "steel-cupboards", featured: true, shortDescription: "Enclosed general-purpose storage for files, supplies, and workplace essentials.", description: "A practical double-door cupboard format for keeping operational materials organised and enclosed within commercial or industrial spaces.", features: ["Enclosed storage format", "Adjustable internal planning", "Double-door access"], advantages: ["Reduces visible clutter", "Supports centralised storage"], applications: ["Offices", "Stores", "Institutions"] },
  { slug: "mechanical-mobile-compactor", name: "Mechanical Mobile Compactor", category: "Mobile Compactors", categorySlug: "mobile-compactors", featured: true, shortDescription: "Movable high-density storage planned to make better use of floor area.", description: "A mobile compactor configuration that consolidates storage bays and opens an access aisle where required.", features: ["Movable storage bays", "High-density layout concept", "Aisle-on-demand access"], advantages: ["Can improve space utilisation", "Supports organised record or material storage"], applications: ["Record rooms", "Offices", "Institutional archives"], accessories: ["Label holders", "Shelf dividers"] },
  { slug: "slotted-angle-shelving-rack", name: "Slotted Angle Shelving Rack", category: "Slotted Angle Racks", categorySlug: "slotted-angle-racks", shortDescription: "Flexible shelving for cartons, parts, records, and general stores.", description: "A modular shelving format suited to organised storage where shelf arrangement and overall sizing may vary by requirement.", features: ["Modular shelving layout", "Multiple shelf levels", "Configurable bay arrangement"], advantages: ["Adaptable to varied item sizes", "Supports systematic stock organisation"], applications: ["Stores", "Workshops", "Back offices"] },
  { slug: "heavy-duty-industrial-rack", name: "Heavy Duty Industrial Rack", category: "Heavy Duty Racks", categorySlug: "heavy-duty-racks", featured: true, shortDescription: "Industrial racking configured for demanding material-storage workflows.", description: "A heavy-duty rack format planned around the stored goods, handling method, bay layout, and available facility space.", features: ["Industrial bay configuration", "Multi-level storage layout", "Requirement-led planning"], advantages: ["Improves vertical space use", "Helps structure bulk storage areas"], applications: ["Manufacturing units", "Industrial stores", "Warehouses"] },
  { slug: "selective-pallet-racking-system", name: "Selective Pallet Racking System", category: "Pallet Racking Systems", categorySlug: "pallet-racking-systems", featured: true, shortDescription: "Direct-access pallet storage for structured warehouse operations.", description: "A selective pallet racking layout intended to provide accessible pallet positions arranged around aisle and handling requirements.", features: ["Direct pallet-position access", "Multi-level warehouse layout", "Configurable bay planning"], advantages: ["Supports selective stock access", "Organises palletised inventory"], applications: ["Warehouses", "Distribution facilities", "Manufacturing stores"], accessories: ["Rack protection options", "Location labels", "Support accessories as required"] },
  { slug: "long-span-warehouse-rack", name: "Long Span Warehouse Rack", category: "Warehouse Storage Systems", categorySlug: "warehouse-storage-systems", shortDescription: "Wide-bay shelving for cartons, bins, and manually handled inventory.", description: "A long-span storage arrangement for items that benefit from broader shelf openings and configurable levels.", features: ["Wide shelf bays", "Multiple storage levels", "Configurable runs"], advantages: ["Supports organised carton storage", "Makes use of vertical space"], applications: ["Warehouses", "E-commerce stores", "Distribution areas"] },
  { slug: "warehouse-storage-rack", name: "Warehouse Storage Rack", category: "Warehouse Storage Systems", categorySlug: "warehouse-storage-systems", shortDescription: "A configurable rack system for structured inventory and material storage.", description: "A general warehouse storage solution that can be planned around inventory type, access needs, and the available floor plan.", features: ["Requirement-led layout", "Bay-based organisation", "Multiple storage levels"], advantages: ["Creates defined storage locations", "Supports clearer inventory organisation"], applications: ["Warehousing", "Logistics", "Commercial stores"] },
  { slug: "four-drawer-filing-cabinet", name: "Four Drawer Filing Cabinet", category: "File Cabinets", categorySlug: "file-cabinets", shortDescription: "Drawer-based filing storage for organised workplace records.", description: "A vertical filing cabinet format for grouping and accessing paper records within offices and administrative environments.", features: ["Four-drawer format", "Vertical filing layout", "Document-focused organisation"], advantages: ["Keeps files grouped", "Uses a compact floor footprint"], applications: ["Offices", "Hospitals", "Educational institutions"], accessories: ["File dividers", "Label holders"] },
  { slug: "industrial-work-table", name: "Industrial Work Table", category: "Industrial Furniture", categorySlug: "industrial-furniture", shortDescription: "A configurable work surface for production, assembly, and service areas.", description: "An industrial table format that can be configured around the work activity, available space, and storage requirements.", features: ["Work-focused layout", "Configurable surface and storage arrangement", "Industrial application format"], advantages: ["Creates a defined work area", "Can combine work and storage functions"], applications: ["Assembly areas", "Workshops", "Maintenance departments"], accessories: ["Drawer units", "Lower shelves", "Tool panels where required"] },
  { slug: "custom-storage-system", name: "Custom Storage System", category: "Customized Storage Solutions", categorySlug: "customized-storage-solutions", featured: true, shortDescription: "A requirement-led storage configuration planned around your space and workflow.", description: "A tailored storage approach for projects where standard rack, cupboard, locker, or furniture formats do not fully address the operational requirement.", features: ["Requirement discovery", "Space-led configuration", "Combination of suitable storage formats"], advantages: ["Aligns storage with operational needs", "Can address unusual spaces or workflows"], applications: ["Factories", "Warehouses", "Commercial facilities"], customizationOptions: ["Layout", "Dimensions", "Storage format", "Internal arrangement", "Finish and colour options"] },
];

export const products: Product[] = seeds.map(product);
export const activeProducts = products.filter((item) => item.active);
export function getProductBySlug(slug: string) { return activeProducts.find((item) => item.slug === slug); }
export function getRelatedProducts(current: Product, limit = 3) { return activeProducts.filter((item) => item.slug !== current.slug && item.categorySlug === current.categorySlug).slice(0, limit); }
