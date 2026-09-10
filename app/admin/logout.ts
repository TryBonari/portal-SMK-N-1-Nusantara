"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAdminAction() {
  (await cookies()).delete("admin_auth");
  redirect("/admin/login");
}
