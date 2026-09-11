"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { name: "Halaman Utama", href: "/admin/dashboard" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-white border-b border-[#EBEBE8] px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[#1A1A1A] rounded-sm" />
          <span className="font-semibold text-xs tracking-tight uppercase text-[#1A1A1A]">
            Portal Admin
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#4A4A45] hover:text-[#1A1A1A] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-[#EBEBE8] flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header Brand */}
          <div className="flex items-center gap-3 pb-6 border-b border-[#EBEBE8]">
            <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
            <div>
              <h2 className="font-semibold text-sm tracking-tight text-[#1A1A1A] uppercase">
                SMA Negeri 1 Nusantara
              </h2>
              <p className="text-[11px] text-[#7A7A70] font-medium">
                Portal Admin Sekolah
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/admin/dashboard"
                  ? pathname === "/admin/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-[6px] text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#1A1A1A] text-white"
                      : "text-[#5A5A52] hover:bg-[#F8F8F6] hover:text-[#1A1A1A]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-white" : "bg-[#9A9A90]"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Profile & Footer Info */}
        <div className="p-4 border-t border-[#EBEBE8] bg-[#FBFBFA]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-semibold">
                AD
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111111]">Admin Utama</p>
                <p className="text-[10px] text-[#7A7A70]">admin@sekolah.sch.id</p>
              </div>
            </div>
            <form
              action={async () => {
                const { logoutAdminAction } = await import("../logout");
                await logoutAdminAction();
              }}
            >
              <button
                type="submit"
                className="text-xs text-[#7A7A70] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                title="Keluar"
              >
                ➔
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}
