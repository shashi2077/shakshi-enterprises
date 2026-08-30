import {
  Archive,
  ArrowUpRight,
  Boxes,
  Building2,
  FileStack,
  LockKeyhole,
  PanelsTopLeft,
  Rows3,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Industrial Lockers",
    description: "Secure personal and equipment storage for industrial workplaces.",
    href: "/products#industrial-lockers",
    icon: LockKeyhole,
  },
  {
    name: "Steel Cupboards",
    description: "Durable enclosed storage for records, supplies, and equipment.",
    href: "/products#steel-cupboards",
    icon: Archive,
  },
  {
    name: "Mobile Compactors",
    description: "High-density movable storage designed to reclaim floor space.",
    href: "/products#mobile-compactors",
    icon: PanelsTopLeft,
  },
  {
    name: "Slotted Angle Racks",
    description: "Flexible modular shelving for organised light-duty storage.",
    href: "/products#slotted-angle-racks",
    icon: Rows3,
  },
  {
    name: "Heavy Duty Racks",
    description: "Robust racking configurations for demanding material storage.",
    href: "/products#heavy-duty-racks",
    icon: Boxes,
  },
  {
    name: "Warehouse Storage Systems",
    description: "Structured storage layouts for efficient warehouse operations.",
    href: "/products#warehouse-storage-systems",
    icon: Warehouse,
  },
  {
    name: "File Cabinets",
    description: "Practical document storage for orderly records management.",
    href: "/products#file-cabinets",
    icon: FileStack,
  },
  {
    name: "Industrial Furniture",
    description: "Purpose-built workplace furniture for operational environments.",
    href: "/products#industrial-furniture",
    icon: Building2,
  },
];

export function ProductCategories() {
  return (
    <section aria-labelledby="product-categories-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-neutral-200 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">Product categories</p>
            <h2 id="product-categories-heading" className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Storage built around the way you work.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 lg:justify-self-end lg:text-lg">
            Explore practical storage categories for industrial, warehouse, office, and commercial requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, description, href, icon: Icon }, index) => (
            <article className="group relative flex min-h-72 flex-col bg-white p-6 transition-colors hover:bg-neutral-950 sm:p-7" key={name}>
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center border border-neutral-200 bg-neutral-50 text-neutral-900 transition-colors group-hover:border-amber-400/40 group-hover:bg-amber-400 group-hover:text-neutral-950">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs font-semibold tabular-nums text-neutral-400 group-hover:text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-auto pt-10">
                <h3 className="text-xl font-semibold tracking-tight text-neutral-950 group-hover:text-white">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600 group-hover:text-neutral-300">{description}</p>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neutral-950 transition-colors group-hover:text-amber-400" href={href}>
                  View Products
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
