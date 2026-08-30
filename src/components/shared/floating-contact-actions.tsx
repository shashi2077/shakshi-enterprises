import { EMAIL_ENQUIRY_URL, WHATSAPP_ENQUIRY_URL } from "@/config/contact";
import { Mail, MessageCircle, MessagesSquare } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    label: "Enquire on WhatsApp",
    href: WHATSAPP_ENQUIRY_URL,
    icon: MessageCircle,
    external: true,
    className: "bg-amber-400 text-neutral-950 hover:bg-amber-300",
  },
  {
    label: "Send an email",
    href: EMAIL_ENQUIRY_URL,
    icon: Mail,
    external: false,
    className: "border border-neutral-300 bg-white text-neutral-950 hover:border-amber-500",
  },
  {
    label: "Contact Shakshi Enterprises",
    href: "/contact#enquiry",
    icon: MessagesSquare,
    external: false,
    className: "bg-neutral-950 text-white hover:bg-neutral-800",
  },
];

export function FloatingContactActions() {
  return (
    <aside aria-label="Contact options" className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-neutral-200 bg-white/95 p-2 shadow-2xl backdrop-blur sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 sm:flex-col sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
      {actions.map(({ label, href, icon: Icon, external, className }) => {
        const sharedClassName = `group relative grid size-12 place-items-center rounded-full shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 sm:size-13 ${className}`;

        if (external) {
          return (
            <a aria-label={label} className={sharedClassName} href={href} key={label} rel="noreferrer" target="_blank">
              <Icon aria-hidden="true" className="size-5" />
              <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap bg-neutral-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                {label}
              </span>
            </a>
          );
        }

        return (
          <Link aria-label={label} className={sharedClassName} href={href} key={label}>
            <Icon aria-hidden="true" className="size-5" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap bg-neutral-950 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
              {label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}
