import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { getAdminIdentity } from "@/lib/auth/admin";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Admin Login", description: "Secure administrator access for Shakshi Enterprises." };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await getAdminIdentity()) redirect("/admin");
  return <main className="grid min-h-screen bg-neutral-950 text-white lg:grid-cols-[0.85fr_1.15fr]"><section className="flex items-center border-b border-neutral-800 px-5 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-16"><div className="mx-auto w-full max-w-md"><Link aria-label="Shakshi Enterprises home" className="inline-flex items-center gap-3" href="/"><span className="grid size-11 place-items-center border border-amber-400/70 text-sm font-bold text-amber-400">SE</span><span className="text-sm font-bold tracking-[0.18em]">SHAKSHI ENTERPRISES</span></Link><p className="mt-16 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Restricted access</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Admin Login</h1><p className="mt-5 max-w-sm leading-7 text-neutral-400">Sign in with an active administrator account. Access is verified against the server-side profile role.</p><LoginForm /></div></section><section className="hidden items-center bg-[linear-gradient(135deg,#161616,#050505)] px-16 lg:flex"><div className="max-w-xl"><ShieldCheck aria-hidden="true" className="size-12 text-amber-400" strokeWidth={1.4} /><h2 className="mt-8 text-4xl font-semibold tracking-tight">Secure operations start with verified access.</h2><p className="mt-5 leading-8 text-neutral-400">Administrative capabilities remain separated from the public catalogue and are protected by Supabase Auth, profile roles, and database policies.</p></div></section></main>;
}
