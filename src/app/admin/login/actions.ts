"use server";

import { redirect } from "next/navigation";
import { hasSupabaseEnvironment } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export interface LoginState { error?: string; }

export async function loginAdmin(_: LoginState, formData: FormData): Promise<LoginState> {
  if (!hasSupabaseEnvironment()) return { error: "Admin authentication is not configured yet." };
  const email = formData.get("email"); const password = formData.get("password");
  if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) return { error: "Enter your email and password." };
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
  if (error || !data.user) return { error: "Invalid email or password." };
  const { data: profile } = await supabase.from("profiles").select("role,active").eq("id", data.user.id).maybeSingle();
  if (!profile || profile.role !== "admin" || !profile.active) {
    await supabase.auth.signOut();
    return { error: "This account does not have active administrator access." };
  }
  redirect("/admin");
}
