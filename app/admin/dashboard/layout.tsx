import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "../_components/AdminSidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has("admin_auth");

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col lg:flex-row selection:bg-[#E5E5E0]">
      <div className="lg:w-64 lg:fixed lg:h-screen lg:flex lg:flex-col lg:z-50">
        <AdminSidebar />
      </div>
      <main className="flex-1 flex flex-col min-w-0 lg:ml-64 h-screen overflow-y-auto">
        <div className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto bg-[#FBFBFA]">
          {children}
        </div>
      </main>
    </div>
  );
}
