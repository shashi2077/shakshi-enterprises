"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { LockKeyhole, Mail } from "lucide-react";
import { loginAdmin, type LoginState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button className="mt-2 min-h-12 bg-amber-400 px-6 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-300 disabled:cursor-wait disabled:opacity-70" disabled={pending} type="submit">{pending ? "Signing in…" : "Sign in securely"}</button>;
}

export function LoginForm() {
  const [state, action] = useActionState<LoginState, FormData>(loginAdmin, {});
  return <form action={action} className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-semibold text-neutral-200" htmlFor="email">Email address<div className="relative"><Mail aria-hidden="true" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" /><input autoComplete="email" className="h-12 w-full border border-neutral-700 bg-neutral-900 pl-11 pr-4 font-normal text-white outline-none focus:border-amber-400" id="email" name="email" required type="email" /></div></label><label className="grid gap-2 text-sm font-semibold text-neutral-200" htmlFor="password">Password<div className="relative"><LockKeyhole aria-hidden="true" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" /><input autoComplete="current-password" className="h-12 w-full border border-neutral-700 bg-neutral-900 pl-11 pr-4 font-normal text-white outline-none focus:border-amber-400" id="password" minLength={8} name="password" required type="password" /></div></label>{state.error && <p aria-live="polite" className="border border-red-900/70 bg-red-950/40 px-4 py-3 text-sm text-red-200" role="alert">{state.error}</p>}<SubmitButton /></form>;
}
