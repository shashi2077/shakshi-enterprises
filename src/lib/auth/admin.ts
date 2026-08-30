import { redirect } from "next/navigation";
import { hasSupabaseEnvironment } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export interface AdminIdentity { id: string; email: string | null; fullName: string | null; }

export async function getAdminIdentity(): Promise<AdminIdentity | null> {
  if (!hasSupabaseEnvironment()) return null;
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return null;
  const { data: profile, error: profileError } = await supabase.from("profiles").select("full_name,role,active").eq("id", user.id).maybeSingle();
  if (profileError || !profile || profile.role !== "admin" || !profile.active) return null;
  return { id: user.id, email: user.email ?? null, fullName: profile.full_name };
}

export async function requireAdmin(): Promise<AdminIdentity> {
  const admin = await getAdminIdentity();
  if (!admin) redirect("/admin/login");
  return admin;
}
