import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E5E5E0]">
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#EBEBE8]">
        <Link href="/" className="text-sm font-medium text-[#6A6A60] hover:text-[#1A1A1A] transition-colors">
          ← Kembali
        </Link>
        <Link href="/" className="flex items-center gap-3">
          <span className="font-medium tracking-tight text-sm uppercase text-[#4A4A45]">
            SMA Negeri 1 Nusantara
          </span>
          <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
        </Link>
      </header>

      <section className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8 my-auto">
        <div className="border-b border-[#EBEBE8] pb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-[#111111] mb-2">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-[#7A7A70]">Terakhir diperbarui: 5 September 2026</p>
        </div>

        <div className="space-y-6 text-[#4A4A45] leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-[#111111] mb-2">1. Informasi yang Dikumpulkan</h2>
            <p>
              Portal ini mencatat data identitas pengguna seperti NISN, NIP, nama lengkap, dan data login untuk keperluan autentikasi dan administrasi akademik resmi.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111] mb-2">2. Penggunaan Informasi</h2>
            <p>
              Data yang dikumpulkan digunakan semata-mata untuk mengelola kehadiran, penilaian akademik, komunikasi sekolah, serta evaluasi kurikulum internal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#111111] mb-2">3. Keamanan Data</h2>
            <p>
              Kami menerapkan standar keamanan terenkripsi dan pembatasan akses data berdasarkan peran pengguna (Role-Based Access Control) guna melindungi informasi pribadi.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#EBEBE8] text-xs text-[#7A7A70] text-center">
        &copy; 2026 SMA Negeri 1 Nusantara.
      </footer>
    </main>
  );
}
