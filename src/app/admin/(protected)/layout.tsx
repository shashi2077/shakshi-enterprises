import Link from "next/link";
import { Boxes, ClipboardList, FolderTree, LayoutDashboard, LogOut, MessageSquareText, Users } from "lucide-react";
import { requireAdmin } from "@/lib/auth/admin";
import { logoutAdmin } from "./actions";

const navigation = [
  { label: "Admin Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Boxes },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquareText },
  { label: "Orders", href: "/admin/orders", icon: ClipboardList },
  { label: "Customers", href: "/admin/customers", icon: Users },
];

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const admin = await requireAdmin();
  return <div className="min-h-screen bg-neutral-100 text-neutral-950 lg:grid lg:grid-cols-[18rem_1fr]"><aside className="border-b border-neutral-800 bg-neutral-950 px-4 py-5 text-white lg:min-h-screen lg:border-b-0 lg:border-r lg:px-5 lg:py-7"><div className="flex items-center justify-between gap-4"><Link className="flex items-center gap-3" href="/"><span className="grid size-10 place-items-center border border-amber-400/70 text-xs font-bold text-amber-400">SE</span><span><span className="block text-sm font-bold tracking-[0.13em]">SHAKSHI</span><span className="mt-1 block text-[0.58rem] tracking-[0.22em] text-neutral-500">ADMINISTRATION</span></span></Link><form action={logoutAdmin} className="lg:hidden"><button aria-label="Log out" className="grid size-10 place-items-center border border-neutral-700 text-neutral-300 hover:border-amber-400 hover:text-amber-400" type="submit"><LogOut aria-hidden="true" className="size-4" /></button></form></div><nav aria-label="Admin navigation" className="mt-6 overflow-x-auto lg:mt-12"><ul className="flex min-w-max gap-2 lg:grid lg:min-w-0">{navigation.map(({ label, href, icon: Icon }) => <li key={href}><Link className="flex min-h-11 items-center gap-3 px-3 text-sm font-semibold text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-white" href={href}><Icon aria-hidden="true" className="size-4 text-amber-400" />{label}</Link></li>)}</ul></nav><div className="mt-10 hidden border-t border-neutral-800 pt-6 lg:block"><p className="truncate text-xs text-neutral-500">{admin.fullName || admin.email || "Administrator"}</p><form action={logoutAdmin} className="mt-4"><button className="flex min-h-10 w-full items-center gap-3 px-3 text-sm font-semibold text-neutral-400 hover:bg-neutral-900 hover:text-white" type="submit"><LogOut aria-hidden="true" className="size-4" />Logout</button></form></div></aside><div className="min-w-0">{children}</div></div>;
}
