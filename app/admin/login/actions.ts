"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export type LoginState = {
  error?: string;
};

export async function loginAdminAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "Akun admin tidak terdaftar di sistem." };
    }

    if (user.role !== "ADMIN") {
      return { error: "Akses ditolak. Akun bukan administrator." };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { error: "Password yang Anda masukkan salah." };
    }

    // Set auth cookie
    (await cookies()).set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2, // 2 hours
      path: "/",
    });
  } catch (err) {
    console.error("Login admin error:", err);
    return { error: "Terjadi kesalahan server saat proses login." };
  }

  redirect("/admin/dashboard");
}
