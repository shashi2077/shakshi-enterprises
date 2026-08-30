import type { Metadata } from "next";
import { Boxes, ClipboardList, FolderTree, MessageSquareText, Users } from "lucide-react";
import { requireAdmin } from "@/lib/auth/admin";

export const metadata: Metadata = { title: "Admin Dashboard", robots: { index: false, follow: false } };
const modules = [
  { name: "Products", description: "Product management will be added in a future step.", icon: Boxes },
  { name: "Categories", description: "Category management will be added in a future step.", icon: FolderTree },
  { name: "Enquiries", description: "Enquiry processing is not connected yet.", icon: MessageSquareText },
  { name: "Orders", description: "Order workflows are not implemented yet.", icon: ClipboardList },
  { name: "Customers", description: "Customer management is not implemented yet.", icon: Users },
];

export default async function AdminDashboardPage() {
  const admin = await requireAdmin();
  return <main className="px-4 py-10 sm:px-8 lg:px-12 lg:py-12"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">Secure workspace</p><h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Admin Dashboard</h1><p className="mt-4 max-w-2xl leading-7 text-neutral-600">Welcome, {admin.fullName || admin.email || "Administrator"}. This foundation verifies administrator access server-side. Management tools will be introduced separately.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{modules.map(({ name, description, icon: Icon }) => <section className="border border-neutral-200 bg-white p-6" key={name}><span className="grid size-11 place-items-center bg-neutral-950 text-amber-400"><Icon aria-hidden="true" className="size-5" /></span><h2 className="mt-7 text-xl font-semibold">{name}</h2><p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p></section>)}</div></div></main>;
}
