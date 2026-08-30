import { ArrowUpRight, Mail, Map, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { EMAIL_ENQUIRY_URL, WHATSAPP_ENQUIRY_URL } from "@/config/contact";
import { locationConfig } from "@/config/location";

const footerNavigation = [
  { href: "/products", label: "Products" }, { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" }, { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" }, { href: "/track-order", label: "Track Order" },
];

export function Footer() {
  const hasGoogleMapsUrl = locationConfig.googleMapsUrl !== "ADD_GOOGLE_MAPS_SHARE_LINK_HERE";

  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <Link aria-label="Shakshi Enterprises home" className="inline-flex items-center gap-4" href="/">
            <span className="grid size-12 place-items-center border border-amber-400/70 text-sm font-bold text-amber-400">SE</span>
            <span><span className="block text-lg font-bold tracking-[0.14em]">SHAKSHI ENTERPRISES</span><span className="mt-2 block text-[0.65rem] font-semibold tracking-[0.24em] text-amber-400">WE MAKE A SPACE FOR YOU</span></span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">Storage and industrial furniture solutions shaped around practical business requirements.</p>
          <div className="mt-6 max-w-sm border-t border-neutral-800 pt-5">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber-400" />
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">Our Location</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{locationConfig.address}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 pl-7">
              <Map aria-hidden="true" className="size-4 shrink-0 text-amber-400" />
              {hasGoogleMapsUrl ? (
                <a
                  aria-label="View Shakshi Enterprises location on Google Maps"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-300 transition-colors hover:text-amber-400 focus-visible:text-amber-400"
                  href={locationConfig.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View on Google Maps
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              ) : (
                <span className="text-sm text-neutral-600">Google Maps link pending</span>
              )}
            </div>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Navigate</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
            {footerNavigation.map(({ href, label }) => <li key={href}><Link className="text-sm text-neutral-300 transition-colors hover:text-amber-400 focus-visible:text-amber-400" href={href}>{label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Business actions</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link className="inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-amber-400" href="/contact#quote">Request a Quote <ArrowUpRight aria-hidden="true" className="size-4" /></Link></li>
            <li><Link className="inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-amber-400" href="/login">Customer Login <ArrowUpRight aria-hidden="true" className="size-4" /></Link></li>
            <li><a className="inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-amber-400" href={WHATSAPP_ENQUIRY_URL} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" className="size-4" /> WhatsApp</a></li>
            <li><a className="inline-flex items-center gap-2 text-neutral-300 transition-colors hover:text-amber-400" href={EMAIL_ENQUIRY_URL}><Mail aria-hidden="true" className="size-4" /> Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-900"><div className="mx-auto max-w-7xl px-4 py-5 text-xs text-neutral-600 sm:px-6 lg:px-8">© Shakshi Enterprises. All rights reserved.</div></div>
    </footer>
  );
}
