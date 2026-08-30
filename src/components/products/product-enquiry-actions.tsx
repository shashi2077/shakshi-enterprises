import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/config/contact";

export function ProductEnquiryActions({ productName, productSlug }: { productName: string; productSlug: string }) {
  const message = `Hello Shakshi Enterprises,\n\nI am interested in:\n${productName}\n\nPlease share product details and quotation.`;
  const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const email = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Enquiry: ${productName}`)}&body=${encodeURIComponent(message)}`;
  return <div className="grid gap-3 sm:grid-cols-3"><Link className="inline-flex min-h-12 items-center justify-center bg-amber-400 px-5 text-sm font-bold text-neutral-950 hover:bg-amber-300" href={`/request-quote?product=${encodeURIComponent(productSlug)}`}>Request Quote</Link><a className="inline-flex min-h-12 items-center justify-center gap-2 bg-neutral-950 px-5 text-sm font-bold text-white hover:bg-neutral-800" href={whatsapp} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" className="size-4" />WhatsApp Enquiry</a><a className="inline-flex min-h-12 items-center justify-center gap-2 border border-neutral-300 px-5 text-sm font-bold text-neutral-950 hover:border-amber-500" href={email}><Mail aria-hidden="true" className="size-4" />Email Enquiry</a></div>;
}
