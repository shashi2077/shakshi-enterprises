import { Blocks, Handshake, Ruler, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    title: "Customized Storage Solutions",
    description: "Storage configurations can be planned around your available space, workflow, and material handling needs.",
    icon: Blocks,
  },
  {
    title: "Industrial-Grade Construction",
    description: "Products are approached with durability, everyday usability, and demanding workplace conditions in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Space Optimization",
    description: "Layouts focus on improving storage density while supporting clear access and organised operations.",
    icon: Ruler,
  },
  {
    title: "B2B Requirement Support",
    description: "Business enquiries are supported from product selection through requirement and quotation discussions.",
    icon: Handshake,
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Why Shakshi Enterprises</p>
            <h2 id="why-choose-us-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              A practical partner for better-organised spaces.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400">
              Our approach starts with the storage requirement—not a one-size-fits-all answer.
            </p>
          </div>

          <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article className="bg-neutral-950 p-7 sm:p-8" key={title}>
                <Icon aria-hidden="true" className="size-7 text-amber-400" strokeWidth={1.5} />
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
