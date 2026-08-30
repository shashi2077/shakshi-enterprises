import {
  Building,
  Dumbbell,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  ShoppingBag,
  Warehouse,
} from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Warehousing & Logistics", icon: Warehouse },
  { name: "Offices", icon: Building },
  { name: "Hospitals & Healthcare", icon: HeartPulse },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Hotels & Hospitality", icon: Hotel },
  { name: "Gyms & Sports Facilities", icon: Dumbbell },
  { name: "Retail & Commercial Facilities", icon: ShoppingBag },
];

export function IndustriesServed() {
  return (
    <section aria-labelledby="industries-served-heading" className="bg-neutral-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">Industries served</p>
          <h2 id="industries-served-heading" className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Storage requirements across modern workplaces.
          </h2>
          <p className="mt-6 text-base leading-7 text-neutral-600 sm:text-lg">
            Product categories can support varied operational environments, from production floors and warehouses to offices and public-facing facilities.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ name, icon: Icon }) => (
            <li className="group flex min-h-32 items-center gap-5 border border-neutral-200 bg-white p-6 transition-colors hover:border-amber-500" key={name}>
              <span className="grid size-11 shrink-0 place-items-center bg-neutral-950 text-amber-400">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
              </span>
              <span className="font-semibold leading-6 text-neutral-900">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
