"use client";

import { useActionState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loginAdminAction, LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAdminAction,
    initialState
  );

  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E5E5E0]">
      {/* Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#EBEBE8]">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
          <span className="font-medium tracking-tight text-sm uppercase text-[#4A4A45]">
            SMA Negeri 1 Nusantara
          </span>
        </Link>
        <nav className="text-sm font-medium text-[#6A6A60] flex items-center gap-6">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
            Kembali ke Beranda
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#EBEBE8] bg-white text-xs font-medium text-[#5A5A52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
            Portal Pengelola &bull; Khusus Administrator
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-[#111111] mb-3">
              Masuk Portal Admin.
            </h1>
            <p className="text-base sm:text-lg text-[#5A5A52] max-w-xl font-normal leading-relaxed">
              Gunakan email administrator yang telah didaftarkan pada sistem basis data untuk mengelola sistem akademik.
            </p>
          </div>

          <div className="w-full max-w-lg bg-white border border-[#E2E2DF] rounded-[10px] p-8 shadow-sm">
            {state?.error ? (
              <div className="p-3.5 bg-[#FEF2F2] border border-[#FEE2E2] text-[#991B1B] rounded-[6px] text-sm font-medium">
                {state.error}
              </div>
            ) : null}
            <form action={formAction} className="space-y-5">

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A45] mb-2"
                  >
                    Email Administrator
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email admin"
                    className="w-full px-4 py-3 bg-[#FBFBFA] border border-[#E2E2DF] rounded-[6px] text-sm text-[#1A1A1A] placeholder-[#9A9A90] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="password"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A45]"
                    >
                      Kata Sandi
                    </label>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-[#FBFBFA] border border-[#E2E2DF] rounded-[6px] text-sm text-[#1A1A1A] placeholder-[#9A9A90] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 px-4 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium text-sm rounded-[6px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isPending ? "Memproses..." : "Login"}
                
                </button>
              </form>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#E2E2DF] rounded-[10px] p-6 shadow-sm">
            <div className="aspect-[4/3] bg-[#EAEAE6] rounded-[8px] mb-6 overflow-hidden relative">
              <Image
                src="/image/gambarsatu.jpeg"
                alt="Dokumentasi Lingkungan Sekolah"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-[#F0F0EC] text-sm">
                <span className="text-[#6A6A60]">Hak Akses</span>
                <span className="font-medium text-[#1A1A1A]">Administrator Utama</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#F0F0EC] text-sm">
                <span className="text-[#6A6A60]">Tahun Ajaran</span>
                <span className="font-medium text-[#1A1A1A]">2026/2027 Ganjil</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-[#6A6A60]">Bantuan Masuk</span>
                <span className="font-medium text-[#1A1A1A]">it@sman1nusantara.sch.id</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#EBEBE8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7A70]">
        <p>&copy; 2026 SMA Negeri X. Seluruh hak cipta dilindungi.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/privacy" className="hover:text-[#1A1A1A]">Kebijakan Privasi</Link>
          <Link href="/terms" className="hover:text-[#1A1A1A]">Ketentuan Layanan</Link>
        </div>
      </footer>
    </main>
  );
}
