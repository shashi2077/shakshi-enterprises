import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_ENQUIRY_URL } from "@/config/contact";

export function FinalEnquiryCta() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative grid items-end gap-9 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">Start a conversation</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">Need a Storage Solution Built Around Your Requirement?</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">Tell us about your space, quantity and storage requirement. Our team can help you identify a suitable solution.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-400 px-6 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:bg-amber-300" href="/contact#quote">Request a Quote<ArrowRight aria-hidden="true" className="size-4" /></Link>
            <a aria-label="Enquire with Shakshi Enterprises on WhatsApp" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-neutral-950 focus-visible:bg-white focus-visible:text-neutral-950" href={WHATSAPP_ENQUIRY_URL} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" className="size-4" />WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
