import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "/contact",
    label: "Contact our sales team",
    icon: PhoneCall,
  },
  {
    href: "/contact#quote",
    label: "Send an enquiry",
    icon: Mail,
  },
];

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-neutral-950 text-neutral-300">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-5">
          {contactItems.map(({ href, label, icon: Icon }, index) => (
            <Link
              className={`${index === 1 ? "hidden sm:flex" : "flex"} items-center gap-2 transition-colors hover:text-amber-300 focus-visible:text-amber-300`}
              href={href}
              key={href}
            >
              <Icon aria-hidden="true" className="size-3.5 text-amber-400" />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 text-right">
          <MapPin aria-hidden="true" className="hidden size-3.5 text-amber-400 md:block" />
          <span className="hidden md:inline">Serving businesses across India</span>
          <MapPin aria-hidden="true" className="size-3.5 text-amber-400 md:hidden" />
          <span className="md:hidden">India</span>
        </div>
      </div>
    </div>
  );
}
