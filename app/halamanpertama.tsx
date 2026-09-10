import Link from "next/link";
import Image from "next/image";

export default function HalamanPertama() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E5E5E0]">
      {/* Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#EBEBE8]">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
          <span className="font-medium tracking-tight text-sm uppercase text-[#4A4A45]">
            SMA Negeri 1 Nusantara
          </span>
        </div>
        <nav className="text-sm font-medium text-[#6A6A60] flex items-center gap-6">
          <Link href="/tentang" className="hover:text-[#1A1A1A] transition-colors">
            Tentang
          </Link>
          <Link href="/kontak" className="hover:text-[#1A1A1A] transition-colors">
            Kontak
          </Link>
        </nav>
      </header>

      {/* Hero / Main Content */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#EBEBE8] bg-white text-xs font-medium text-[#5A5A52]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57]" />
            Portal Akademik Resmi 2026/2027
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-[#111111]">
            Sistem Informasi <br />
            Akademik Terpadu.
          </h1>

          <p className="text-lg text-[#5A5A52] max-w-xl font-normal leading-relaxed">
            Platform manajemen sekolah terpusat untuk siswa, pengajar, dan administrator. Silakan pilih hak akses portal di bawah ini untuk melanjutkan.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              href="/login/user"
              className="group p-6 bg-white border border-[#E2E2DF] rounded-[10px] hover:border-[#1A1A1A] transition-all flex flex-col justify-between gap-6"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium text-[#7A7A70] uppercase tracking-wider">
                  Portal Siswa & Guru
                </span>
                <span className="text-[#1A1A1A] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111] mb-1">
                  Registrasi User
                </h3>
                <p className="text-sm text-[#6A6A60]">
                  Akses materi, nilai, dan absensi harian.
                </p>
              </div>
            </Link>

            <Link
              href="/admin/login"
              className="group p-6 bg-white border border-[#E2E2DF] rounded-[10px] hover:border-[#1A1A1A] transition-all flex flex-col justify-between gap-6"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium text-[#7A7A70] uppercase tracking-wider">
                  Portal Pengelola
                </span>
                <span className="text-[#1A1A1A] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111] mb-1">
                  Login Admin
                </h3>
                <p className="text-sm text-[#6A6A60]">
                  Manajemen data sekolah, kurikulum, dan sistem.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Real School Photography Representation / Structured Info */}
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
                <span className="text-[#6A6A60]">Tahun Ajaran</span>
                <span className="font-medium text-[#1A1A1A]">2026/2027 Ganjil</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-[#6A6A60]">Bantuan Teknis</span>
                <span className="font-medium text-[#1A1A1A]">it@sman1nusantara.sch.id</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-[#EBEBE8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7A70]">
        <p>&copy; 2026 SMA Negeri 1 Nusantara. Seluruh hak cipta dilindungi.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/privacy" className="hover:text-[#1A1A1A]">Kebijakan Privasi</Link>
          <Link href="/terms" className="hover:text-[#1A1A1A]">Ketentuan Layanan</Link>
        </div>
      </footer>
    </main>
  );
}
