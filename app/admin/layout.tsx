import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "./_components/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has("admin_auth");

  // Jika belum login dan sedang tidak berada di halaman login, redirect ke /admin/login
  // Di Next.js App Router, /admin/login juga menggunakan layout ini jika posisinya di bawah app/admin/
  // Oleh karena itu kita perlu mengecek path atau membuat route group (misal app/admin/(auth)/login dan app/admin/(dashboard)/...)
  
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col selection:bg-[#E5E5E0]">
      {children}
    </div>
  );
}
