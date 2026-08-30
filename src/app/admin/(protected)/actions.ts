"use server";

import { redirect } from "next/navigation";
import { hasSupabaseEnvironment } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export async function logoutAdmin() {
  if (hasSupabaseEnvironment()) { const supabase = await createClient(); await supabase.auth.signOut(); }
  redirect("/admin/login");
}
